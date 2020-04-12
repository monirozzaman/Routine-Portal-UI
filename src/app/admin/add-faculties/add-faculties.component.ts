import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-faculties',
  templateUrl: './add-faculties.component.html',
  styleUrls: ['./add-faculties.component.css']
})
export class AddFacultiesComponent implements OnInit {

  addFaculties: FormGroup;
  fullName: string;
  teacherInitial: string;
  designation: string;
  dept: string;
  employeeId: string;
  facultyLabel: string;
  phoneNumber: string;
  email: string;
  password: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.addFaculties = this.formBuilder.group({
      fullName: [''],
      teacherInitial: [''],
      designation: [''],
      dept: [''],
      employeeId: [''],
      facultyLabel: [''],
      phoneNumber: [''],
      email: [''],
      password: ['']
    })
  }

  onSubmit() {

    this.fullName = this.addFaculties.controls['fullName'].value;
    this.teacherInitial = this.addFaculties.controls['teacherInitial'].value;
    this.designation = this.addFaculties.controls['designation'].value;
    this.dept = this.addFaculties.controls['dept'].value;
    this.employeeId = this.addFaculties.controls['employeeId'].value;
    this.facultyLabel = this.addFaculties.controls['facultyLabel'].value;
    this.phoneNumber = this.addFaculties.controls['phoneNumber'].value;
    this.email = this.addFaculties.controls['email'].value;
    this.password = this.addFaculties.controls['password'].value;

    console.log(this.addFaculties.value);

  }
}
