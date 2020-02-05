import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardAdminComponent} from "./admin/dashboard-admin/dashboard-admin.component";
import {AddFacultiesComponent} from "./admin/add-faculties/add-faculties.component";
import {FacultiesListComponent} from "./admin/faculties-list/faculties-list.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'admin', component: DashboardAdminComponent},
      {path: 'add-faculties', component: AddFacultiesComponent},
      {path: 'faculties-list', component: FacultiesListComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
