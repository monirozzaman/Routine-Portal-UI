import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {formatDate} from "@angular/common";
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class CreateNewRoutineService {
  constructor(private http: HttpClient) {
  }

  public postRoutineForCreate(routineVersion: string, effectiveDate: string, semester: string, routineType: string): Observable<any> {
    console.log(routineVersion);
    const cValue = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    const routineJson =
      {
        "routineVersion": routineVersion,
        "routineSession": semester,
        "routinePublishDate": cValue,
        "routineEffectiveDate": effectiveDate,
        "days": [
          {
            "saturday": [
              {
                "roomNo": "AB4-514",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              }
            ],
            "sunday": [
              {
                "roomNo": "AB4-514",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              }
            ],
            "monday": [
              {
                "roomNo": "AB4-514",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {

                "roomNo": "AB4-220",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {

                "roomNo": "AB4-220",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              }
            ],
            "tuesday": [
              {
                "roomNo": "AB4-514",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              }
            ],
            "wednesday": [
              {
                "roomNo": "AB4-514",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              }
            ],
            "thursday": [
              {
                "roomNo": "AB4-514",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-514",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-204",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-503",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-602",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-604",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB1-103",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "08.00",
                "endTime": "10.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "10.00",
                "endTime": "11.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "11.30",
                "endTime": "01.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "01.00",
                "endTime": "02.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "02.30",
                "endTime": "04.00",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              },
              {
                "roomNo": "AB4-220",
                "startTime": "04.00",
                "endTime": "05.30",
                "label": "Not Occupied",
                "courseCode": "Not Occupied",
                "section": "Not Occupied",
                "facultyMember": "Not Occupied",
                "facultyMemberEmployeeId": "Not Occupied"
              }
            ]
          }
        ]
      };
    const createRoutineApi: string = environment.itvillage.baseApiEndPoint + 'admin/routine/create';

    return this.http.post(createRoutineApi, routineJson);

  }

}
