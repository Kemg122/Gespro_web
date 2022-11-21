import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class GpProjectManagerFormService {

  constructor(private fb: FormBuilder) {
  }

  gpProjectManagerForm() {
    return this.fb.group({
      id: ['',],
      creationDate: [new Date()],
      email: ['', [Validators.compose([Validators.email, Validators.required])]],
      fileNumber: ['', Validators.compose([Validators.maxLength(5), Validators.required])],
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
