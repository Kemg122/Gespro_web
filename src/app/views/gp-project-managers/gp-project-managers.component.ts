import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GpProjectManagerFormService} from 'src/app/forms/gp-project-manager-form.service';
import {GpProjectManager} from 'src/app/models/gp-project-manager';
import {GpProjectManagerService} from 'src/app/services/gp-project-manager.service';
import {ToastrService} from "ngx-toastr";
import { GpProject } from 'src/app/models/gp-project';
import { GpProjectService } from 'src/app/services/gp-project.service';
import { GpProjectComponent } from '../gp-project/gp-project.component';

@Component({
  selector: 'app-gp-project-managers',
  templateUrl: './gp-project-managers.component.html',
  styleUrls: ['./gp-project-managers.component.scss']
})
export class GpProjectManagersComponent implements OnInit {

  projectManager!: GpProjectManager;
  projectManagerList!: GpProjectManager[];
  projectsList: GpProject[] = [];
  namePM : string | undefined;


  constructor(
    private gpEmpFormService: GpProjectManagerFormService,
    private gpProjectManagerService: GpProjectManagerService,
    private gpProjectService: GpProjectService,
    private router: Router,
    private alertService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAllProjectManager();
   
  }

  edit(id: any) {
    this.router.navigate(['/admin/projectManagers/', id]);
  }

  delete(id: any) {
    if (confirm(`Do want to delete item ${id}`)) {
      this.gpProjectManagerService.delete(id).subscribe(() => {
          this.getAllProjectManager();
        },
        (error) => {
          this.alertService.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }
  }

  getprojectsByPM(id: any) {
      this.projectsList = [];
      this.gpProjectManagerService.getByid(id).subscribe(
        (res) => {
        if(res.gpProjects.length > 0) {
          this.projectsList = res.gpProjects;
          this.namePM = res.lastname;
        }
      })
  }

  closeProjects(){
    this.projectsList = [];
    this.namePM = "";
  }

  getAllProjectManager() {
    this.gpProjectManagerService.getAll().subscribe(
      (res) => {
        this.projectManagerList = res;
      },
      (error) => {
      }
    );
  }
}
