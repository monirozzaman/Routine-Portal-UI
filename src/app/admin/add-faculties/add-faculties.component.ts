import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

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

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
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

    this.authService.signUp(this.fullName, this.teacherInitial, this.designation, this.dept, this.employeeId,
      this.facultyLabel, this.phoneNumber, this.email, this.password).subscribe(res => {
      this.router.navigate(['dashboard/faculties-list']);
    }, error => {
      console.log(error);
    })


  }
}
