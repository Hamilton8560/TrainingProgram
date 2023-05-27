import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HabitTrackerComponent } from './habit-tracker/habit-tracker.component';
import { LogbookComponent } from './logbook/logbook.component';

const routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
 {path:'workouts', component:WorkoutsComponent},
  {path:'habit-tracker', component:HabitTrackerComponent},
  {path:'logbook/:id', component:LogbookComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule],
    exports:[RouterModule]
})

export class AppRoutingModule { }
