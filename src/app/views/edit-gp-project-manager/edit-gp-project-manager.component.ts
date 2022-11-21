import { Component, OnInit } from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GpProjectManagerFormService} from 'src/app/forms/gp-project-manager-form.service';
import {GpProjectManager} from 'src/app/models/gp-project-manager';
import {GpProjectManagerService} from 'src/app/services/gp-project-manager.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-gp-project-manager',
  templateUrl: './edit-gp-project-manager.component.html',
  styleUrls: ['./edit-gp-project-manager.component.scss']
})
export class EditGpProjectManagerComponent implements OnInit {
  title: string = 'New';
  projectManagerForm!: FormGroup;
  projectManager!: GpProjectManager;
  idEmp!: number;

  constructor(
    private gpEmpFormService: GpProjectManagerFormService,
    private gpEmpService: GpProjectManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.projectManagerForm = this.gpEmpFormService.gpProjectManagerForm();
    this.idEmp = this.route.snapshot.params.id;
   }


   get f() {
    return this.projectManagerForm.controls;
  }

  ngOnInit(): void {
    this.populateForm();
    if (this.idEmp) {
      this.title = 'Update ';
    }
  }

  populateForm() {
    if (this.idEmp) {
      this.gpEmpService.getByid(this.idEmp).subscribe((res) => {
        this.projectManager = res;
        this.projectManagerForm.patchValue(this.projectManager);
      });
    }
  }

  save() {
    if (this.idEmp) {
      if (
        JSON.stringify(this.projectManager) !== JSON.stringify(this.projectManagerForm.value)
      ) {
        this.gpEmpService.update(this.projectManagerForm.value, this.idEmp).subscribe(
          (res) => {
            this.alertService.success(
              `Item ${res.fileNumber} was updated`,
              'Success'
            );
            this.router.navigate(['/admin/projectManagers']);
          },
          (error) => {
            this.alertService.error(
              `Item ${error.error.message.split(';', 1)}`,
              `${error.status}`
            );
          }
        );
      } else {
        this.alertService.warning(`Nothing to update`);
      }
    } else {
      this.gpEmpService.create(this.projectManagerForm.value).subscribe(
        (res) => {
          this.alertService.success(
            `Item ${res.fileNumber} was created`,
            'Success'
          );
          this.router.navigate(['/admin/projectManagers']);
        },
        (error) => {
          this.alertService.error(
            `Item ${error.error.message.split(';', 1)}`,
            `${error.status}`
          );
        }
      );
    }
  }
}
