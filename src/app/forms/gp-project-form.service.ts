import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class GpProjectFormService {
  constructor(private fb: FormBuilder) {}
  getGpProjectForm(): FormGroup {
    return this.fb.group({
      id: '',
      amount: [''],
      creationDate: [''],
      endDate: [''],
      startDate: [''],
      updateDate: [''],
      description: [''],
      name: [''],
      projectCode: [''],
      gpPhases: [],
      gpChefProjet: ['', [Validators.required]],
      gpOrganization: ['', [Validators.required]],
    });
  }
}