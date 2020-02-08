import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";


@Injectable()
export class DashboardAdminService {


  public getClassRoomDateAndTime(): Observable<any> {

    const json = [{
      "saturday": [{
        "ab4_514": "",
        "ab4_204": "L3T2 SWE333 PC-A",
        "ab4_503": "L3T2 SWE333 PC-A",
        "ab4_602": "L3T2 SWE333 PC-A",
        "ab4_604": "L3T2 SWE333 PC-A",
        "ab4_103": "L3T2 SWE333 PC-A"
      },

        {
          "ab4_514": "MM",
          "ab4_204": "MM",
          "ab4_503": "MM",
          "ab4_602": "MM",
          "ab4_604": "MM",
          "ab4_103": "MM"
        },
        {
          "ab4_514": "L4T1 SWE426 PC-A1",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
        {
          "ab4_514": "MM",
          "ab4_204": "MM",
          "ab4_503": "MM",
          "ab4_602": "MM",
          "ab4_604": "MM",
          "ab4_103": "MM"
        },
        {
          "ab4_514": "L4T1 SWE423 PC-B",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
        {
          "ab4_514": "MM",
          "ab4_204": "MM",
          "ab4_503": "MM",
          "ab4_602": "MM",
          "ab4_604": "MM",
          "ab4_103": "MM"
        },
        {
          "ab4_514": "Not Occupied",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
        {
          "ab4_514": "",
          "ab4_204": "MM",
          "ab4_503": "MM",
          "ab4_602": "MM",
          "ab4_604": "MM",
          "ab4_103": "MM"
        },
        {
          "ab4_514": "Not Occupied",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
        {
          "ab4_514": "",
          "ab4_204": "MM",
          "ab4_503": "MM",
          "ab4_602": "MM",
          "ab4_604": "MM",
          "ab4_103": "MM"
        },
        {
          "ab4_514": "ALL >SWE-CPS >PC-A",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
        {
          "ab4_514": "MM",
          "ab4_204": "MM",
          "ab4_503": "MM",
          "ab4_602": "MM",
          "ab4_604": "MM",
          "ab4_103": "MM"
        }
      ]
    },
      {
        "sunday": [{
          "ab4_514": "",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
          {
            "ab4_514": "MM",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "L4T1\n SWE426 PC-A1",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "MM",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "L4T1\n SWE423 PC-B",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "MM",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "Not Occupied",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "Not Occupied",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "ALL >SWE-CPS >PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "MM",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          }
        ]
      },
      {
        "monday": [{
          "ab4_514": "L3T2 SWE333 PC-A",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
          {
            "ab4_514": "MM",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "MM",
            "ab4_204": "MM",
            "ab4_503": "MM",
            "ab4_602": "MM",
            "ab4_604": "MM",
            "ab4_103": "MM"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },

          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          }
        ]
      },
      {
        "tuesday": [{
          "ab4_514": "L3T2 SWE333 PC-A",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          }
        ]
      },
      {
        "wednesday": [{
          "ab4_514": "L3T2 SWE333 PC-A",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          }
        ]
      },
      {
        "thursday": [{
          "ab4_514": "L3T2 SWE333 PC-A",
          "ab4_204": "L3T2 SWE333 PC-A",
          "ab4_503": "L3T2 SWE333 PC-A",
          "ab4_602": "L3T2 SWE333 PC-A",
          "ab4_604": "L3T2 SWE333 PC-A",
          "ab4_103": "L3T2 SWE333 PC-A"
        },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          },
          {
            "ab4_514": "L3T2 SWE333 PC-A",
            "ab4_204": "L3T2 SWE333 PC-A",
            "ab4_503": "L3T2 SWE333 PC-A",
            "ab4_602": "L3T2 SWE333 PC-A",
            "ab4_604": "L3T2 SWE333 PC-A",
            "ab4_103": "L3T2 SWE333 PC-A"
          }
        ]
      }
    ];

    return of(json);
  }
}
