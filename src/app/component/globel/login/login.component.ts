import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo: FormGroup;
  employeeId: string;
  password: string;
  errorShow: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.loginInfo = this.formBuilder.group({
      employeeId: [''],
      password: [''],
    })
  }

  onSubmit() {
    this.employeeId = this.loginInfo.controls['employeeId'].value;
    this.password = this.loginInfo.controls['password'].value;
    this.authService.login(this.employeeId, this.password).subscribe(res => {
      localStorage.setItem('token', res.id);
      this.router.navigate(['dashboard']);
      this.getProfileDetails();
    }, error => {
      console.log(error.status);
      this.errorShow = true;
    });
  }

  getProfileDetails() {
    this.userService.getUserDetails().subscribe(res => {

      localStorage.setItem('teacherInitial', res.teacherInitial);
      localStorage.setItem('fullName', res.fullName);
      localStorage.setItem('phoneNumber', res.phoneNumber);
      localStorage.setItem('designation', res.designation);
      localStorage.setItem('employeeId', res.employeeId);
      localStorage.setItem('employeeId', res.employeeId);
      localStorage.setItem('facultyType', res.facultyType);

    }, error => {

    })

  }
}
