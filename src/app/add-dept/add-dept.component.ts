import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent implements OnInit {

  deptForm: FormGroup;
  deptName: string;
  description: string;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.deptForm = this.fb.group({
      deptName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: ['', Validators.compose([Validators.maxLength(500)])]
    });
  }

  get f() {
    return this.deptForm.controls;
  }

  onSubmit(value) {
    alert('Button was clicked');
    console.log(value);
  }
}
