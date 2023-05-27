import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { LogoContainerComponent } from './logo-container/logo-container.component';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutsComponent } from './workouts/workouts.component';
import { ButtonModule } from 'primeng/button';
import {  MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { LogbookComponent } from './logbook/logbook.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LogoContainerComponent,
    WorkoutsComponent,
    NavbarComponent,
    HabitTrackerComponent,
    LogbookComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,ButtonModule, MenuModule, MenubarModule,
    AppRoutingModule, CardModule, SlideMenuModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
