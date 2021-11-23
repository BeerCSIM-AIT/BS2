import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BS2';
  n1: number = 5;
  n2: number = 2;
  picName:string =  "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg";

  hi(name:string){
    alert("Hi " + name);
  }
}
