import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-volunteer',
  templateUrl: './register-volunteer.component.html',
  styleUrls: ['./register-volunteer.component.scss']
})
export class RegisterVolunteerComponent implements OnInit {
  registerForm: FormGroup;
  //registerForm2: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   name : new FormControl(''),
    //   surname : new FormControl(''),
    //   phone : new FormControl(''),
    //   address : new FormControl(''),
    // });

    this.registerForm = this.fb.group({
      name: [''],
      surname: [''],
      phone: [''],
      address: [''],
    });
  }

  submitForm(f) {
    console.log(f);
  }

}
