import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GpProjectManagerFormService} from 'src/app/forms/gp-project-manager-form.service';
import {GpProjectManager} from 'src/app/models/gp-project-manager';
import {GpProjectManagerService} from 'src/app/services/gp-project-manager.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-gp-project-managers',
  templateUrl: './gp-project-managers.component.html',
  styleUrls: ['./gp-project-managers.component.scss']
})
export class GpProjectManagersComponent implements OnInit {

  projectManager!: GpProjectManager;
  projectManagerList!: GpProjectManager[];

  constructor(
    private gpEmpFormService: GpProjectManagerFormService,
    private gpProjectManagerService: GpProjectManagerService,
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
