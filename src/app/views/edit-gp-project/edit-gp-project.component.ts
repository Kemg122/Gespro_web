import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { GpProjectFormService } from 'src/app/forms/gp-project-form.service';
import { GpOrganization } from 'src/app/models/gp-organization';
import { GpProject } from 'src/app/models/gp-project';
import { GpProjectManager } from 'src/app/models/gp-project-manager';
import { GpOrganisationService } from 'src/app/services/gp-organisation.service';
import { GpProjectManagerService } from 'src/app/services/gp-project-manager.service';
import { GpProjectService } from 'src/app/services/gp-project.service';

@Component({
  selector: 'app-edit-gp-project',
  templateUrl: './edit-gp-project.component.html',
  styleUrls: ['./edit-gp-project.component.scss'],
})
export class EditGpProjectComponent implements OnInit {
  title: string = 'New ';
  projectForm!: FormGroup;
  project!: GpProject;
  idProj!: number;
  listProjectManager!: GpProjectManager[];
  gpChefProjet: GpProjectManager | undefined;
  listOrganisations!: GpOrganization[];
  gpOrganization: GpOrganization | undefined;

  constructor(
    private gpProjectFormService: GpProjectFormService,
    private gpProjService: GpProjectService,
    private gpProjectManagerService: GpProjectManagerService,
    private gpOrgService: GpOrganisationService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.projectForm = this.gpProjectFormService.projectForm();
    this.idProj = this.route.snapshot.params.id;
  }

  ngOnInit(): void {

    this.getAllProjectManager();
    this.getAllOrganizations();
    if (this.idProj) {
      this.title = 'Update ';
    }
    this.ngOnChanges();
  }

  get f() {
    return this.projectForm.controls;
  }

  getAllProjectManager() {
    this.gpProjectManagerService.getAll().subscribe((res) => {
      this.listProjectManager = res;
    });
  }

  getAllOrganizations() {
    this.gpOrgService.getAll().subscribe((res) => {
      this.listOrganisations = res;
    });
  }

  ngOnChanges(): void {
    if (this.idProj) {
      this.gpProjService.getByid(this.idProj).subscribe((res) => {
        this.project = res;
        this.gpChefProjet = this.project.gpChefProjet;
        this.gpOrganization = this.project.gpOrganization;
        this.projectForm.patchValue(this.project);
      });
    }
  }

  save() {
    if (this.idProj) {
      if (
        JSON.stringify(this.project) !== JSON.stringify(this.projectForm.value)
        ) {
        this.gpProjService.update(this.projectForm.value, this.idProj).subscribe(
          (res) => {
            this.alertService.success(
              `Item ${res.projectCode} was updated`,
              'Success'
            );
            this.router.navigate(['/admin/projects/']);
          },
            (error) => {
              this.alertService.error(`Item ${error.error.message.split(';', 1)}`, `${error.status}`);
            });
      } else {
        this.alertService.warning(`Nothing to update`);
      }
    } else {
      this.gpProjService.create(this.projectForm.value).subscribe((res) => {
        this.alertService.success(`Item ${res.projectCode} was created`, 'Success');
        this.router.navigate(['/admin/projects/']);
      },
        (error) => {
          this.alertService.error(`Item ${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }

}

