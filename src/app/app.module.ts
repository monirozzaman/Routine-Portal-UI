import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ManuAdminPanelComponent} from './manu-admin-panel/manu-admin-panel.component';
import {AddFacultiesComponent} from './admin/add-faculties/add-faculties.component';
import {FacultiesListComponent} from './admin/faculties-list/faculties-list.component';
import {ProfileComponent} from './profile/profile.component';
import {DashboardAdminComponent} from './admin/dashboard-admin/dashboard-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManuAdminPanelComponent,
    AddFacultiesComponent,
    FacultiesListComponent,
    ProfileComponent,
    DashboardAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
