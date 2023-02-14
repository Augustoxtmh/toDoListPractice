import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/errorPage/errorPage.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{path: "", redirectTo: "home", pathMatch: "full"},
                        {path: "home", component: HomeComponent, pathMatch: "full"},
                        {path: "login", component: LoginComponent, pathMatch: "full"},
                        {path: "**", component: ErrorPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
