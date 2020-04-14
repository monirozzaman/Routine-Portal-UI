import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isShowAdminMenu: boolean;
  isShowFacultiesMenu: boolean;
  role: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.role = this.authService.getAuthTokenScopes()[0];
    this.setMenuByRole();
  }

  private setMenuByRole() {
    console.log(this.role);
    if (this.role === 'ROLE_PM') {
      this.isShowAdminMenu = false;
      this.isShowFacultiesMenu = true;
    } else if (this.role === 'ROLE_ADMIN') {
      this.isShowAdminMenu = true;
      this.isShowFacultiesMenu = false;
    }
  }
}
