import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {GpProjectManager} from '../models/gp-project-manager';
import {CrudService} from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class GpProjectManagerService extends CrudService<GpProjectManager> {
  constructor(httpClient: HttpClient) {
    const url: string = environment.baseUrl;
    super(httpClient, `${url}/project-manager`);
  }
}
