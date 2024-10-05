import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }
  myclass:string="success";
  rating: number=6;
  isError: boolean=false;
  jsonObj= {
    "success":!this.isError,
    "failure":this.isError,
    "special":true 
  }
  ngOnInit(): void {
  }

}
