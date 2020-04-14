import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-faculties-list',
  templateUrl: './faculties-list.component.html',
  styleUrls: ['./faculties-list.component.css']
})
export class FacultiesListComponent implements OnInit {

  employeesList: Array<any>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userService.getUserDetailsList().subscribe(res => {
      this.employeesList = res;
      console.log(this.employeesList);

    }, error => {

    });

  }
}
