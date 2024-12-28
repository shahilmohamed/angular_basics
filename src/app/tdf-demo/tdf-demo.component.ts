import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  country:any[]=[
    {cid:1,name:'India'},
    {cid:2,name:'US'},
    {cid:3,name:'Japan'}
  ]
  password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  email_pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$";

  onSubmit(f:NgForm)
  {
    console.log("User name:"+f.value.myusername)
    console.log("Radio button:"+f.value.con)
  }

}
