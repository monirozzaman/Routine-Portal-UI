import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CreateNewRoutineService} from "../../services/create-new-routine.service";

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.component.html',
  styleUrls: ['./create-routine.component.css']
})
export class CreateRoutineComponent implements OnInit {
  createRoutine: FormGroup;
  routineVersion: string;
  effectiveDate: string;
  semester: string;
  routineType: string;
  isShow: boolean;

  constructor(private formBuilder: FormBuilder, private createNewRoutineService: CreateNewRoutineService) {
  }

  ngOnInit(): void {
    this.createRoutine = this.formBuilder.group(
      {
        routineVersion: [''],
        effectiveDate: [''],
        semester: [''],
        routineType: ['']
      }
    )
    this.isShow = false;
  }

  onSubmit() {
    this.routineVersion = this.createRoutine.controls['routineVersion'].value;
    this.effectiveDate = this.createRoutine.controls['effectiveDate'].value;
    this.semester = this.createRoutine.controls['semester'].value;
    this.routineType = this.createRoutine.controls['routineType'].value;

    if (this.routineVersion != '' && this.effectiveDate != '' && this.semester != '' && this.routineType != '') {
      this.createNewRoutineService.postRoutineForCreate(this.routineVersion, this.effectiveDate,
        this.semester, this.routineType).subscribe(res => {
        console.log(res);
      });
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

}
