import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.compose(
        [ Validators.required, 
          Validators.minLength(10),
          Validators.maxLength(13)
        ])],
      address: [''],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitForm(f) {
    if (this.registerForm.invalid) {
      alert('Please fill all values');
      return;
    }
    console.log(f);
  }

}
