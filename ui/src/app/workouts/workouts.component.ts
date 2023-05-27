import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent {
workouts=[]
  onWeightlifting(){
    console.log("works")
  }
  constructor(private http:HttpClient, private domSanitizer: DomSanitizer){}

onSelect(id:any){
this.http.get('http://localhost:3000/programs/'+id).subscribe(response=>
  console.log(response)
)
}
  ngOnInit() {
    this.http.get('http://localhost:3000/programs').subscribe(
      (response: any) => {
        console.log(response);
        this.workouts = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  sanitizeVideoUrl(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

