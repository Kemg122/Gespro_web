import {Component, OnChanges, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GpAdressFormService} from 'src/app/forms/gp-adress-form.service';
import {GpAddress} from 'src/app/models/gp-address';
import {GpEmployee} from 'src/app/models/gp-employee';
import {GpOrganization} from 'src/app/models/gp-organization';
import {GpAddressService} from 'src/app/services/gp-address.service';
import {GpEmployeeService} from 'src/app/services/gp-employee.service';
import {GpOrganisationService} from 'src/app/services/gp-organisation.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-gp-address',
  templateUrl: './edit-gp-address.component.html',
  styleUrls: ['./edit-gp-address.component.scss'],
})
export class EditGpAddressComponent implements OnInit, OnChanges {
  addrForm!: FormGroup;
  address!: GpAddress;
  idAddr!: number;
  listOrganisations!: GpOrganization[];
  listEmployees!: GpEmployee[];
  employee!: GpEmployee | undefined;
  title: string = 'New ';
  gpOrganization: GpOrganization | undefined;
  isAdrForEmp: number = 0;

  constructor(
    private gpAddrFormService: GpAdressFormService,
    private gpAddrService: GpAddressService,
    private gpOrgService: GpOrganisationService,
    private route: ActivatedRoute,
    private router: Router,
    private gpEmpService: GpEmployeeService,
    private alertService: ToastrService
  ) {
    this.idAddr = this.route.snapshot.params['id'];
  }

  get f() {
    return this.addrForm.controls;
  }

  ngOnInit(): void {
    this.addrForm = this.gpAddrFormService.adressForm();
    this.getAllEmployees();
    this.getAllOrganizations();
    if (this.idAddr) {
      this.title = 'Update ';
    }
    this.showValue();
    this.ngOnChanges();
  }

  ngOnChanges(): void {
    if (this.idAddr) {
      this.gpAddrService.getByid(this.idAddr).subscribe((res) => {
        this.address = res;
        if (res.gpEmployee !== null) {
          this.isAdrForEmp = 1;
        }
        this.gpOrganization = this.address.gpOrganization;
        this.employee = this.address.gpEmployee;
        this.addrForm.patchValue(this.address);
      });
    }
  }

  getAllEmployees() {
    this.gpEmpService.getAll().subscribe((res) => {
      this.listEmployees = res;
    });
  }

  getAllOrganizations() {
    this.gpOrgService.getAll().subscribe((res) => {
      this.listOrganisations = res;
    });
  }

  save() {
    if (this.idAddr) {
      if (
        JSON.stringify(this.address) !== JSON.stringify(this.addrForm.value)
      ) {
        this.gpAddrService.update(this.addrForm.value, this.idAddr).subscribe(
          (res) => {
            this.alertService.success(
              `Item ${res.zipCode} was updated`,
              'Success'
            );
            this.router.navigate(['/admin/addresses/']);
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
      this.gpAddrService.create(this.addrForm.value).subscribe(
        (res) => {
          this.alertService.success(
            `Item ${res.zipCode} was created`,
            'Success'
          );
          this.router.navigate(['/admin/addresses/']);
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

  showValue() {
    switch (this.isAdrForEmp) {
      case 0 : {
        this.addrForm.get('gpOrganization')?.addValidators(Validators.required);
        this.addrForm.get('gpEmployee')?.clearValidators();
        this.addrForm.get('gpEmployee')?.reset();
      }
        break;
      case 1 : {
        this.addrForm.get('gpEmployee')?.addValidators(Validators.required);
        this.addrForm.get('gpOrganization')?.clearValidators();
        this.addrForm.get('gpOrganization')?.reset();
      }
        break;
      default :
        break;
    }
  }
}
