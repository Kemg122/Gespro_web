import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class GpProjectFormService {
  constructor(private fb: FormBuilder) {
  }
projectForm() {
    return this.fb.group({
      id: [''],
      amount: ['', [Validators.compose([Validators.required])]],
      creationDate: [new Date(), [Validators.compose([Validators.required])]],
      endDate: ['', [Validators.compose([Validators.required])]],
      startDate: ['', [Validators.compose([Validators.required])]],
      updateDate: [''],
      description: ['', [Validators.compose([Validators.required])]],
      name: ['', [Validators.compose([Validators.required])]],
      projectCode: ['', [Validators.compose([Validators.required])]],
      gpPhases: [''],
      gpChefProjet: ['', [Validators.compose([Validators.required])]],
      gpOrganization: ['', [Validators.compose([Validators.required])]]
    });
  }
}
