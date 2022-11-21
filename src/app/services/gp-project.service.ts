import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GpProject } from '../models/gp-project';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class GpProjectService extends CrudService<GpProject> {
  constructor(httpClient: HttpClient) {
    const url: string = environment.baseUrl;
    super(httpClient, `${url}/project`);
  }
}

