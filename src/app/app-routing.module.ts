import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardAdminComponent} from "./admin/dashboard-admin/dashboard-admin.component";
import {AddFacultiesComponent} from "./admin/add-faculties/add-faculties.component";
import {FacultiesListComponent} from "./admin/faculties-list/faculties-list.component";
import {AccessControlComponent} from "./admin/access-control/access-control.component";
import {CreateRoutineComponent} from "./admin/create-routine/create-routine.component";
import {AuthGuardServiceGuard} from "./services/auth-guard-service.guard";
import {UpdateMyClassComponent} from "./update-my-class/update-my-class.component";
import {MyRoutineComponent} from "./faculies/my-routine/my-routine.component";
import {RoutineShowComponent} from "./faculies/routine-show/routine-show.component";
import {AvailableRoomsComponent} from "./available-rooms/available-rooms.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardServiceGuard],
    children: [
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'admin', component: DashboardAdminComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'add-faculties', component: AddFacultiesComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'faculties-list', component: FacultiesListComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'access-control', component: AccessControlComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'create-new-routine', component: CreateRoutineComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'update-my-class', component: UpdateMyClassComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'my-routine', component: MyRoutineComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'routine', component: RoutineShowComponent, canActivate: [AuthGuardServiceGuard],},
      {path: 'available-rooms', component: AvailableRoomsComponent, canActivate: [AuthGuardServiceGuard],},

    ]
  },
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
