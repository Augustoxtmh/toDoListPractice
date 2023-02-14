import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from "./components/home/header/header.component";
import { IndTasksComponent } from "./components/home/indTasks/indTasks.component";
import { GroupTasksComponent } from "./components/home/groupTasks/groupTasks.component";
import { FooterComponent } from "./components/home/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        IndTasksComponent,
        GroupTasksComponent,
        FooterComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ]
})
export class AppModule { }
