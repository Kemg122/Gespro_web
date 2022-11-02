import {Component, OnChanges, OnInit} from '@angular/core';
import {GpProjectFormService} from "../../forms/gp-project-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GpProjectManager} from "../../models/gp-project-manager";
import {GpOrganisationService} from "../../services/gp-organisation.service";
import {ToastrService} from "ngx-toastr";
import {FormGroup} from "@angular/forms";
import {GpProject} from "../../models/gp-project";
import {GpOrganization} from "../../models/gp-organization";
import {GpProjectService} from "../../services/gp-project.service";
import {GpProjectManagerService} from "../../services/gp-project-manager.service";

@Component({
  selector: 'app-edit-gp-project',
  templateUrl: './edit-gp-project.component.html',
  styleUrls: ['./edit-gp-project.component.scss']
})
export class EditGpProjectComponent implements OnInit, OnChanges {

  title: string = 'New ';
  projectForm!: FormGroup;
  project!: GpProject;
  idProject!: number;
  gpProjectManager: GpProjectManager | undefined;

  organization: GpOrganization | undefined;

  gpChefProjets: GpProjectManager[] = [];

  gpOrganizations: GpOrganization[] = [];

  constructor(
    private projectFormService: GpProjectFormService,
    private projectServices: GpProjectService,
    private organisationService: GpOrganisationService,
    private pManagerService: GpProjectManagerService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: ToastrService
  ) {
    this.idProject = this.route.snapshot.params['id'];
  }

  get f() {
    return this.projectForm.controls;
  }

  ngOnInit(): void {
    this.projectForm = this.projectFormService.getGpProjectForm();
    this.getAllChefProjets();
    this.getAllOrganisation();
    this.ngOnChanges();
    if (this.idProject) {
      this.title = 'Update ';
    }
  }

  getAllChefProjets() {
    this.pManagerService.getAll().subscribe(
      (res) => {
        this.gpChefProjets = res;
      },
      (error) => {
      }
    );
  }

  getAllOrganisation() {
    this.organisationService.getAll().subscribe(
      (res) => {
        this.gpOrganizations = res;
      },
      (error) => {
      }
    );
  }


  onSaveProject(project: GpProject) {
    this.projectServices.create(project).subscribe((res: GpProject) => {
      this.alertService.success(
        `Création de l'item: ${res.projectCode} `,
        'Success'
      );
      this.router.navigate(['/admin/projects/']);
    });
  }


  save() {
    if (this.idProject) {
      if (
        JSON.stringify(this.project) !== JSON.stringify(this.projectForm.value)
      ) {
        this.projectServices.update(this.projectForm.value, this.idProject).subscribe(
          (res) => {
            this.alertService.success(
              `Item ${res.projectCode} was updated`,
              'Success'
            );
            this.router.navigate(['/admin/projects']);
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
      this.projectServices.create(this.projectForm.value).subscribe(
        (res) => {
          this.alertService.success(
            `Item ${res.projectCode} was created`,
            'Success'
          );
          this.router.navigate(['/admin/projects']);
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

  ngOnChanges(): void {
    if (this.idProject) {
      this.projectServices.getByid(this.idProject).subscribe((res) => {
        this.project = res;
        this.organization = this.project.gpOrganization;
        this.gpProjectManager = this.project.gpChefProjet;
        this.projectForm.patchValue(this.project);
      });
    }
  }

}
