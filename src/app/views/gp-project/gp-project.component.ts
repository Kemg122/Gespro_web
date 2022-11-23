import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GpProject } from 'src/app/models/gp-project';
import { GpProjectService } from 'src/app/services/gp-project.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-gp-project',
  templateUrl: './gp-project.component.html',
  styleUrls: ['./gp-project.component.scss'],
})
export class GpProjectComponent implements OnInit {
  

//  @Input()
//  projectByPM!: GpProject[];
  
  gpProjects: GpProject[] = [];

  constructor(
    private projectService: GpProjectService,
    private router: Router,
    private alertService: ToastrService) {
  }

  ngOnInit(): void {
      this.getProjects();
    
  }

  getProjects() {
    this.projectService.getAll().subscribe(
      (res) => {
        this.gpProjects = res;
      },
      (err) => {
      }
    );
  }

  edit(id: any) {
    this.router.navigate(['/admin/projects/', id]);
  }

  delete(id: any) {
    if (confirm(`Do want to delete item ${id}`)) {
      this.projectService.delete(id).subscribe((res) => {
        this.getProjects();
      },
        (error) => {
          this.alertService.error(`${error.error.message.split(';', 1)}`, `${error.status}`);
        });
    }


  }
}