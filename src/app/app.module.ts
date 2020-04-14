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
import {RoutineService} from "./services/routine.service";
import {AccessControlComponent} from './admin/access-control/access-control.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CreateRoutineComponent} from './admin/create-routine/create-routine.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {AuthGuardServiceGuard} from "./services/auth-guard-service.guard";
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import {ManuFacultiesPanelComponent} from './manu-faculties-panel/manu-faculties-panel.component';
import {UpdateMyClassComponent} from './update-my-class/update-my-class.component';
import {MyRoutineComponent} from "./faculies/my-routine/my-routine.component";
import {RoutineShowComponent} from './faculies/routine-show/routine-show.component';
import {AvailableRoomsComponent} from './available-rooms/available-rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManuAdminPanelComponent,
    AddFacultiesComponent,
    FacultiesListComponent,
    ProfileComponent,
    DashboardAdminComponent,
    AccessControlComponent,
    CreateRoutineComponent,
    ManuFacultiesPanelComponent,
    UpdateMyClassComponent,
    MyRoutineComponent,
    RoutineShowComponent,
    AvailableRoomsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [RoutineService, AuthService, AuthGuardServiceGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
