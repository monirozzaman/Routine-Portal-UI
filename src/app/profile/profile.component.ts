import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  designation: string;
  employeeId: string;
  teacherInitial: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.userService.getUserDetails().subscribe(res => {
      this.name = res.fullName;
      this.email = res.email;
      this.phone = res.phoneNumber;
      this.designation = res.designation;
      this.employeeId = res.employeeId;
      this.teacherInitial = res.teacherInitial;

    }, error => {

    })

    console.log(this.name)
  }


}
