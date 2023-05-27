import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
items:any

constructor(private router:Router){}
  ngOnInit(){
    this.items =[{
       label:'Home',
      icon:'pi pi-fw pi-home',
      command:()=> this.router.navigate([''])
     },
     {
      label:'logout',
      icon:'pi pi-fw pi-user'

     }
    
    ]
  }
  }

