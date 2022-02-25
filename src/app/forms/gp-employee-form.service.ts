import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GpEmployeeFormService {

  constructor(private fb: FormBuilder) {
  }

  gpEmployeeForm() {
    return this.fb.group({
      id: ['',],
      creationDate: [new Date()],
      email: ['', [Validators.compose([Validators.email, Validators.required])]],
      fileNumber: ['', Validators.required],
      firstname: ['', [Validators.compose([Validators.required])]],
      lastname: ['',],
      login: ['', [Validators.compose([Validators.required])]],
      password: ['', [Validators.compose([Validators.required])]],
      phoneNumber: ['',],
      updateDate: ['',],
      gpAddresses: [],
    })
  }
}
