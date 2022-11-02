import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GpEmployeeFormService} from 'src/app/forms/gp-employee-form.service';
import {GpEmployee} from 'src/app/models/gp-employee';
import {GpEmployeeService} from 'src/app/services/gp-employee.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-gp-employee',
  templateUrl: './edit-gp-employee.component.html',
  styleUrls: ['./edit-gp-employee.component.scss'],
})
export class EditGpEmployeeComponent implements OnInit {
  title: string = 'New ';
  empForm!: FormGroup;
  employee!: GpEmployee;
  idEmp!: number;

  constructor(
    private gpEmpFormService: GpEmployeeFormService,
    private gpEmpService: GpEmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.empForm = this.gpEmpFormService.gpEmployeeForm();
    this.idEmp = this.route.snapshot.params.id;
  }

  get f() {
    return this.empForm.controls;
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
        this.employee = res;
        this.empForm.patchValue(this.employee);
      });
    }
  }

  save() {
    if (this.idEmp) {
      if (
        JSON.stringify(this.employee) !== JSON.stringify(this.empForm.value)
      ) {
        this.gpEmpService.update(this.empForm.value, this.idEmp).subscribe(
          (res) => {
            this.alertService.success(
              `Item ${res.fileNumber} was updated`,
              'Success'
            );
            this.router.navigate(['/admin/employees']);
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
      this.gpEmpService.create(this.empForm.value).subscribe(
        (res) => {
          this.alertService.success(
            `Item ${res.fileNumber} was created`,
            'Success'
          );
          this.router.navigate(['/admin/employees']);
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
