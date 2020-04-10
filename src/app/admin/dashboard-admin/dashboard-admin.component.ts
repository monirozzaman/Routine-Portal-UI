import {Component, OnInit} from '@angular/core';
import {DashboardAdminService} from "../../services/dashboard.admin.service";
import {ClassRoom} from "../../model/class.room";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  private saturdayClassRoomDetails4514: Array<ClassRoom> = [];
  private saturdayClassRoomDetails4204: Array<ClassRoom> = [];
  private saturdayClassRoomDetails4503: Array<ClassRoom> = [];
  private saturdayClassRoomDetails4602: Array<ClassRoom> = [];
  private saturdayClassRoomDetails4604: Array<ClassRoom> = [];
  private saturdayClassRoomDetails1103: Array<ClassRoom> = [];
  private saturdayClassRoomDetails4220: Array<ClassRoom> = [];


  private sundayClassRoomDetails4514: Array<any> = [];
  private sundayClassRoomDetails4204: Array<any> = [];
  private sundayClassRoomDetails4503: Array<any> = [];
  private sundayClassRoomDetails4602: Array<any> = [];
  private sundayClassRoomDetails4604: Array<any> = [];
  private sundayClassRoomDetails1103: Array<any> = [];
  private sundayClassRoomDetails4220: Array<any> = [];

  private mondayClassRoomDetails4514: Array<any> = [];
  private mondayClassRoomDetails4204: Array<any> = [];
  private mondayClassRoomDetails4503: Array<any> = [];
  private mondayClassRoomDetails4602: Array<any> = [];
  private mondayClassRoomDetails4604: Array<any> = [];
  private mondayClassRoomDetails1103: Array<any> = [];
  private mondayClassRoomDetails4220: Array<any> = [];


  private tuesdayClassRoomDetails4514: Array<any> = [];
  private tuesdayClassRoomDetails4204: Array<any> = [];
  private tuesdayClassRoomDetails4503: Array<any> = [];
  private tuesdayClassRoomDetails4602: Array<any> = [];
  private tuesdayClassRoomDetails4604: Array<any> = [];
  private tuesdayClassRoomDetails1103: Array<any> = [];
  private tuesdayClassRoomDetails4220: Array<any> = [];

  private wednesdayClassRoomDetails4514: Array<any> = [];
  private wednesdayClassRoomDetails4204: Array<any> = [];
  private wednesdayClassRoomDetails4503: Array<any> = [];
  private wednesdayClassRoomDetails4602: Array<any> = [];
  private wednesdayClassRoomDetails4604: Array<any> = [];
  private wednesdayClassRoomDetails1103: Array<any> = [];
  private wednesdayClassRoomDetails4220: Array<any> = [];


  private thursdayClassRoomDetails4514: Array<any> = [];
  private thursdayClassRoomDetails4204: Array<any> = [];
  private thursdayClassRoomDetails4503: Array<any> = [];
  private thursdayClassRoomDetails4602: Array<any> = [];
  private thursdayClassRoomDetails4604: Array<any> = [];
  private thursdayClassRoomDetails1103: Array<any> = [];
  private thursdayClassRoomDetails4220: Array<any> = [];


  private timesArray: Array<any> = [];
  private daysArray: Array<String> = ["Saturday", 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

  constructor(private dashboardAdminService: DashboardAdminService) {
  }

  ngOnInit() {
    this.getClassDetails();
    //this.sortData();
  }

  setClassSchedule(classIdentifier: string) {
    console.log('saturdayR2C3');


  }

  getClassDetails() {
    this.dashboardAdminService.getClassRoomDateAndTime().subscribe(res => {
      res.days.forEach(dayWise => {

        /*----------------------For Saturday--------------------------------*/
        dayWise.saturday.forEach(day => {
          if (day.roomNo === 'AB4-514') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails4514.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-204') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails4204.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-503') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails4503.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-602') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails4602.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-604') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails4604.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB1-103') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails1103.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-220') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.saturdayClassRoomDetails4220.push(day);
            this.timesArray.push(timesOfClass);
          }
        });

        /*----------------------For Sunday--------------------------------*/
        dayWise.sunday.forEach(day => {

          if (day.roomNo === 'AB4-514') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails4514.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-204') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails4204.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-503') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails4503.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-602') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails4602.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-604') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails4604.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB1-103') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails1103.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-220') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.sundayClassRoomDetails4220.push(day);
            this.timesArray.push(timesOfClass);
          }
        });

        /*----------------------For Monday--------------------------------*/
        dayWise.monday.forEach(day => {
          if (day.roomNo === 'AB4-514') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails4514.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-204') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails4204.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-503') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails4503.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-602') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails4602.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-604') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails4604.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB1-103') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails1103.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-220') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.mondayClassRoomDetails4220.push(day);
            this.timesArray.push(timesOfClass);
          }
        });

        /*----------------------For Tuesday--------------------------------*/
        dayWise.tuesday.forEach(day => {
          if (day.roomNo === 'AB4-514') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails4514.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-204') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails4204.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-503') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails4503.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-602') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails4602.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-604') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails4604.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB1-103') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails1103.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-220') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.tuesdayClassRoomDetails4220.push(day);
            this.timesArray.push(timesOfClass);
          }
        });

        /*----------------------For Wednesday--------------------------------*/
        dayWise.wednesday.forEach(day => {
          if (day.roomNo === 'AB4-514') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails4514.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-204') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails4204.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-503') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails4503.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-602') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails4602.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-604') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails4604.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB1-103') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails1103.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-220') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.wednesdayClassRoomDetails4220.push(day);
            this.timesArray.push(timesOfClass);
          }
        });
        /*----------------------For Thursday--------------------------------*/

        dayWise.thursday.forEach(day => {
          if (day.roomNo === 'AB4-514') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails4514.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-204') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails4204.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-503') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails4503.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-602') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails4602.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-604') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails4604.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB1-103') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails1103.push(day);
            this.timesArray.push(timesOfClass);
          }
          if (day.roomNo === 'AB4-220') {
            var timesOfClass = {
              startTime: day.startTime,
              endTime: day.endTime
            };
            this.thursdayClassRoomDetails4220.push(day);
            this.timesArray.push(timesOfClass);
          }
        });
      });

    });


    // Remove multiple value
    //this.saturdayClassRoomDetails=  Object.values(this.saturdayClassRoomDetails.reduce((previousValue, currentValue) => Object.assign(previousValue,{[currentValue.startTime]: currentValue}),{}));
    console.log(this.saturdayClassRoomDetails4514);

  }

}
