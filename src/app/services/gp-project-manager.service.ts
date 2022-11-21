import { Injectable } from '@angular/core';
import {CrudService} from "./crud.service";
import {GpProjectManager} from "../models/gp-project-manager";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GpProjectManagerService extends CrudService<GpProjectManager>{

  constructor(httpClient: HttpClient) {
    const url: string = environment.baseUrl;
    super(httpClient, `${url}/chefProjet`);
  }
}
