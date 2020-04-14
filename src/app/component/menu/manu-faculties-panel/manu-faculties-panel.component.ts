import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manu-faculties-panel',
  templateUrl: './manu-faculties-panel.component.html',
  styleUrls: ['./manu-faculties-panel.component.css']
})
export class ManuFacultiesPanelComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
