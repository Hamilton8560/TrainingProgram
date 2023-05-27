import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items:any;
constructor(private http: HttpClient, private router: Router ){}


  ngOnInit(){
    this.items = [
      {
          label: 'Workout',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  command: ()=> this.router.navigate(['workouts'])
                  
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-trash'
              },
              {
                  separator: true
              },
              {
                  label: 'Export',
                  icon: 'pi pi-fw pi-external-link'
              },
          ],
        },
          {
            label:'Habits',
            icon: 'pi pi-fw pi-slack',
            items:[{
              label:'Track',
              icon:'pi pi-fw pi-pencil',
              command:()=> this.router.navigate(['habit-tracker'])
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
              }
            ]
          }
      

  ]}
}
