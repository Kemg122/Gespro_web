import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GpOrganisationFormService} from 'src/app/forms/gp-organisation-form.service';
import {GpOrganization} from 'src/app/models/gp-organization';
import {GpOrganisationService} from 'src/app/services/gp-organisation.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-gp-organisation',
  templateUrl: './edit-gp-organisation.component.html',
  styleUrls: ['./edit-gp-organisation.component.scss'],
})
export class EditGpOrganisationComponent implements OnInit {
  title: string = 'New ';
  organisationForm!: FormGroup;
  organisation!: GpOrganization;
  idOrg!: number;

  constructor(
    private gpOrgFormService: GpOrganisationFormService,
    private gpOrgService: GpOrganisationService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.organisationForm = this.gpOrgFormService.getOrganisationForm();
    this.idOrg = this.route.snapshot.params.id;
  }

  get f() {
    return this.organisationForm.controls;
  }

  ngOnInit(): void {
    this.populateForm();
    if (this.idOrg) {
      this.title = 'Update ';
    }
  }

  populateForm() {
    if (this.idOrg) {
      this.gpOrgService.getByid(this.idOrg).subscribe((response) => {
        this.organisation = response;
        this.organisationForm.patchValue(this.organisation);
      });
    }
  }

  save() {
    if (this.idOrg) {
      if (JSON.stringify(this.organisation) !== JSON.stringify(this.organisationForm.value)) {
        this.gpOrgService
          .update(this.organisationForm.value, this.idOrg)
          .subscribe((res) => {
              this.alertService.success(`Item ${res.orgCode} was updated`, 'Success');
              this.router.navigate(['/admin/organisations/']);
            },
            (error) => {
              this.alertService.error(`Item ${error.error.message.split(';', 1)}`, `${error.status}`);
            });
      } else {
        this.alertService.warning(`Nothing to update`);
      }
    } else {
      this.gpOrgService.create(this.organisationForm.value).subscribe((res) => {
          this.alertService.success(`Item ${res.orgCode} was created`, 'Success');
          this.router.navigate(['/admin/organisations/']);
        },
        (error) => {
          this.alertService.error(`Item ${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }
}
