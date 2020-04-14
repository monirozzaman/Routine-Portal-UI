import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-manu-admin-panel',
  templateUrl: './manu-admin-panel.component.html',
  styleUrls: ['./manu-admin-panel.component.css']
})
export class ManuAdminPanelComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
