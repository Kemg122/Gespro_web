import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  status: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status = !this.status;
  }
}
