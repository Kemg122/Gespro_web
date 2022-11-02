import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GpOrganization} from 'src/app/models/gp-organization';
import {GpOrganisationService} from 'src/app/services/gp-organisation.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-gp-organisations',
  templateUrl: './gp-organisations.component.html',
  styleUrls: ['./gp-organisations.component.scss'],
})
export class GpOrganisationsComponent implements OnInit {
  gpOrganisations: GpOrganization[] = [];
  gpOrganisation!: GpOrganization;

  constructor(
    private organisationService: GpOrganisationService,
    private router: Router,
    private alertService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getOrganisations();
  }

  getOrganisationById(id: number) {
    this.organisationService.getByid(id).subscribe(
      (res) => {
        this.gpOrganisation = res;
      },
      (err) => {
      }
    );
  }

  getOrganisations() {
    this.organisationService.getAll().subscribe(
      (res) => {
        this.gpOrganisations = res;
      },
      (err) => {
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['/admin/organisations/', id]);
  }

  delete(id: any) {
    if (confirm(`Do want to delete item ${id}`)) {
      this.organisationService.delete(id).subscribe((res) => {
          this.getOrganisations();
        },
        (error) => {
          this.alertService.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }
}
