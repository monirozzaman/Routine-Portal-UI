import {Component, OnInit} from '@angular/core';
import {DashboardAdminService} from "../../services/dashboard.admin.service";
import {ClassRoom} from "../../model/class.room";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  private saturdayClassRoomDetails: Array<ClassRoom> = [];
  private sundayClassRoomDetails: Array<any> = [];
  private mondayClassRoomDetails: Array<any> = [];
  private tuesdayClassRoomDetails: Array<any> = [];
  private wednesdayClassRoomDetails: Array<any> = [];
  private thursdayClassRoomDetails: Array<any> = [];
  private daysArray: Array<String> = ["Saturday", 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

  constructor(private dashboardAdminService: DashboardAdminService) {
  }

  ngOnInit() {
    this.getClassDetails();
  }

  setClassSchedule(classIdentifier: string) {
    console.log('saturdayR2C3');


  }

  getClassDetails() {
    this.dashboardAdminService.getClassRoomDateAndTime().subscribe(res => {
      res.forEach(dayWise => {

        dayWise.saturday.forEach(day => {
          this.saturdayClassRoomDetails.push(day)
          console.log(day);
        });
      });

    });

  }
}
