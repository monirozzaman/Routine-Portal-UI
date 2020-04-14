import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoutineService} from "../../../services/routine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-my-class',
  templateUrl: './update-my-class.component.html',
  styleUrls: ['./update-my-class.component.css']
})
export class UpdateMyClassComponent implements OnInit {

  addMyClass: FormGroup;
  sTimes: string;
  eTimes: string;
  room: string;
  labelss: string;
  coursess: string;
  sectionss: string;
  day: string;
  classId: string;
  sTimesp: string;
  eTimesp: string;
  roomp: string;
  labelssp: string;
  coursessp: string;
  sectionssp: string;

  labels = ['Spring-2020', 'Fall-2020', 'Summer-2020'];
  courses = ['SWE-514', 'SWE-204', 'SWE-503', 'SWE-602', 'SWE-604', 'SWE-103', 'SWE-220'];
  sections = ['PC-A', 'PC-B', 'PC-C', 'PC-D'];

  constructor(private formBuilder: FormBuilder, private routineService: RoutineService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.day = this.activatedRoute.snapshot.queryParams['day'];
    this.classId = this.activatedRoute.snapshot.queryParams['classId'];
    this.room = this.activatedRoute.snapshot.queryParams['room'];
    this.getPresentClassDetails();
  }

  ngOnInit() {

    this.addMyClass = this.formBuilder.group({
      labels: [''],
      courses: [''],
      sections: ['']

    })
  }

  onSubmit() {

    this.labelss = this.addMyClass.controls['labels'].value;
    this.coursess = this.addMyClass.controls['courses'].value;
    this.sectionss = this.addMyClass.controls['sections'].value;
    this.routineService.updateMyClass(this.sTimesp, this.eTimesp, this.room, this.labelss,
      this.coursess, this.sectionss, this.day, this.classId).subscribe(res => {

    }, statusCode => {

      if (statusCode.status === 200) {
        this.router.navigate(['dashboard/admin']);
      } else {
        console.log("Something is wrong");
      }
    });
  }

  getPresentClassDetails() {
    this.routineService.getPresentClassDetails(this.day, this.classId).subscribe(res => {

      this.sTimesp = res.startTime;
      this.eTimesp = res.endTime;
      this.labelssp = res.label;
      this.coursessp = res.courseCode;
      this.sectionssp = res.section;


    }, statusCode => {

      if (statusCode.status === 200) {
        console.log("200");
      } else {
        console.log("Something is wrong");
      }
    });
  }
}
