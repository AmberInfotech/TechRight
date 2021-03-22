import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dept',
  templateUrl: './add-dept.component.html',
  styleUrls: ['./add-dept.component.scss']
})
export class AddDeptComponent implements OnInit {

  deptForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.deptForm = this.fb.group({
      deptName: ['', Validators.required, Validators.maxLength(50)]
    });
  }

}
