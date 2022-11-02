import {Component, OnInit} from '@angular/core';
import {GpProjectManager} from "../../models/gp-project-manager";
import {FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {GpProjectManagerService} from "../../services/gp-project-manager.service";
import {GpProjectManagerFormService} from "../../forms/gp-project-manager-form.service";

@Component({
  selector: 'app-edit-gp-project-manager',
  templateUrl: './edit-gp-project-manager.component.html',
  styleUrls: ['./edit-gp-project-manager.component.scss']
})
export class EditGpProjectManagerComponent implements OnInit {
  title: string = 'New ';
  pmForm!: FormGroup;
  projectManager!: GpProjectManager;
  idPm!: number;

  constructor(
    private gpPmFormService: GpProjectManagerFormService,
    private gpPmService: GpProjectManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.pmForm = this.gpPmFormService.gpEmployeeForm();
    this.idPm = this.route.snapshot.params['id'];
  }

  get f() {
    return this.pmForm.controls;
  }

  ngOnInit(): void {
    this.populateForm();
    if (this.idPm) {
      this.title = 'Update ';
    }
  }

  populateForm() {
    if (this.idPm) {
      this.gpPmService.getByid(this.idPm).subscribe((res) => {
        this.projectManager = res;
        this.pmForm.patchValue(this.projectManager);
      });
    }
  }

  save() {
    if (this.idPm) {
      if (
        JSON.stringify(this.projectManager) !== JSON.stringify(this.pmForm.value)
      ) {
        this.gpPmService.update(this.pmForm.value, this.idPm).subscribe(
          (res) => {
            this.alertService.success(
              `Item ${res.fileNumber} was updated`,
              'Success'
            );
            this.router.navigate(['/admin/project-managers']);
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
      this.gpPmService.create(this.pmForm.value).subscribe(
        (res) => {
          this.alertService.success(
            `Item ${res.fileNumber} was created`,
            'Success'
          );
          this.router.navigate(['/admin/project-managers']);
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
