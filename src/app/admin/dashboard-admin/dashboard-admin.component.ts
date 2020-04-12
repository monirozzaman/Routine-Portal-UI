import {Component, OnInit} from '@angular/core';
import {RoutineService} from "../../services/routine.service";
import {ClassRoom} from "../../model/class.room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  saturdayClassRoomDetails4514: Array<ClassRoom> = [];
  saturdayClassRoomDetails4204: Array<ClassRoom> = [];
  saturdayClassRoomDetails4503: Array<ClassRoom> = [];
  saturdayClassRoomDetails4602: Array<ClassRoom> = [];
  saturdayClassRoomDetails4604: Array<ClassRoom> = [];
  saturdayClassRoomDetails1103: Array<ClassRoom> = [];
  saturdayClassRoomDetails4220: Array<ClassRoom> = [];


  sundayClassRoomDetails4514: Array<any> = [];
  sundayClassRoomDetails4204: Array<any> = [];
  sundayClassRoomDetails4503: Array<any> = [];
  sundayClassRoomDetails4604: Array<any> = [];
  sundayClassRoomDetails4602: Array<any> = [];
  sundayClassRoomDetails1103: Array<any> = [];
  sundayClassRoomDetails4220: Array<any> = [];

  mondayClassRoomDetails4514: Array<any> = [];
  mondayClassRoomDetails4503: Array<any> = [];
  mondayClassRoomDetails4602: Array<any> = [];
  mondayClassRoomDetails4204: Array<any> = [];
  mondayClassRoomDetails4604: Array<any> = [];
  mondayClassRoomDetails1103: Array<any> = [];
  mondayClassRoomDetails4220: Array<any> = [];


  tuesdayClassRoomDetails4514: Array<any> = [];
  tuesdayClassRoomDetails4204: Array<any> = [];
  tuesdayClassRoomDetails4503: Array<any> = [];
  tuesdayClassRoomDetails4602: Array<any> = [];
  tuesdayClassRoomDetails4604: Array<any> = [];
  tuesdayClassRoomDetails1103: Array<any> = [];
  tuesdayClassRoomDetails4220: Array<any> = [];

  wednesdayClassRoomDetails4514: Array<any> = [];
  wednesdayClassRoomDetails4204: Array<any> = [];
  wednesdayClassRoomDetails4503: Array<any> = [];
  wednesdayClassRoomDetails4602: Array<any> = [];
  wednesdayClassRoomDetails4604: Array<any> = [];
  wednesdayClassRoomDetails1103: Array<any> = [];
  wednesdayClassRoomDetails4220: Array<any> = [];


  thursdayClassRoomDetails4514: Array<any> = [];
  thursdayClassRoomDetails4204: Array<any> = [];
  thursdayClassRoomDetails4503: Array<any> = [];
  thursdayClassRoomDetails4602: Array<any> = [];
  thursdayClassRoomDetails4604: Array<any> = [];
  thursdayClassRoomDetails1103: Array<any> = [];
  thursdayClassRoomDetails4220: Array<any> = [];


  timesArray: Array<any> = [];
  daysArray: Array<String> = ["Saturday", 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']

  constructor(private dashboardAdminService: RoutineService, private router: Router) {
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

  addNewRoutine() {
    console.log("Console");
    this.router.navigate(['dashboard/create-new-routine'])
  }

}
