import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './component/globel/login/login.component';
import {DashboardComponent} from './component/globel/dashboard/dashboard.component';
import {ManuAdminPanelComponent} from './component/menu/manu-admin-panel/manu-admin-panel.component';
import {AddFacultiesComponent} from './component/admin/add-faculties/add-faculties.component';
import {FacultiesListComponent} from './component/admin/faculties-list/faculties-list.component';
import {ProfileComponent} from './component/globel/profile/profile.component';
import {DashboardAdminComponent} from './component/admin/dashboard-admin/dashboard-admin.component';
import {RoutineService} from "./services/routine.service";
import {AccessControlComponent} from './component/admin/access-control/access-control.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CreateRoutineComponent} from './component/admin/create-routine/create-routine.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {AuthGuardServiceGuard} from "./services/auth-guard-service.guard";
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import {ManuFacultiesPanelComponent} from './component/menu/manu-faculties-panel/manu-faculties-panel.component';
import {UpdateMyClassComponent} from './component/faculties/update-my-class/update-my-class.component';
import {MyRoutineComponent} from "./component/faculties/my-routine/my-routine.component";
import {RoutineShowComponent} from './component/faculties/routine-show/routine-show.component';
import {AvailableRoomsComponent} from './component/faculties/available-rooms/available-rooms.component';


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
export class AppModule {
}
