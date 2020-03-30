import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, ReactiveFormsModule,FormsModule, NgControl, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
    form: FormGroup;
   constructor(fb:FormBuilder) {
    this.form=fb.group({
      phone:['']
    })
  }
  get phone() :FormControl{
    // console.log(this.form.controls)
    console.log(this.form.controls['phone'].value)
    return (this.form.controls['phone']) as FormControl
  }
  get errors():string{
    return JSON.stringify(this.phone.errors)
  }
}