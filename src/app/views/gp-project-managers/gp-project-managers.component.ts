import {Component, OnInit} from '@angular/core';
import {GpProjectManager} from "../../models/gp-project-manager";
import {GpProjectManagerService} from "../../services/gp-project-manager.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {GpProject} from "../../models/gp-project";
import {GpProjectService} from "../../services/gp-project.service";

@Component({
  selector: 'app-gp-project-managers',
  templateUrl: './gp-project-managers.component.html',
  styleUrls: ['./gp-project-managers.component.scss']
})
export class GpProjectManagersComponent implements OnInit {
  projectList: GpProject[] = [];
  projectManagerList!: GpProjectManager[];
  managerName: string | undefined;
  openProjets: boolean = false;

  constructor(
    private gpPmService: GpProjectManagerService,
    private gpProject: GpProjectService,
    private router: Router,
    private alertService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAllEmployees()
  }

  onCloseProjets() {
    this.openProjets = false;
  }

  viewProjectsByPM(id: any) {
    this.gpPmService.getByid(id).subscribe(
      (res) => {
        if (res.gpProjects.length > 0) {
          this.openProjets = true;
          this.projectList = res.gpProjects;
          this.managerName = res.lastname;
        }
      }
    )
  }

  edit(id: any) {
    this.router.navigate(['/admin/project-managers/', id]);
  }

  delete(id: any) {
    if (confirm(`Do want to delete item ${id}`)) {
      this.gpPmService.delete(id).subscribe(() => {
          this.getAllEmployees();
        },
        (error) => {
          this.alertService.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }

  getAllEmployees() {
    this.gpPmService.getAll().subscribe(
      (res) => {
        this.projectManagerList = res;
      }
    );
  }

}
