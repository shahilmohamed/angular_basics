import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  myid:number=9;

  jsonObj={
    id:1,
    fname:'Mohamed',
    lname:'Shahil'
  }
  ngOnInit(): void {
  }
  onPage1()
  {
    this.router.navigate(['/page1'])
  }
  onPage2()
  {
    this.router.navigate(['/page2',this.myid])
  }
  onPage3()
  {
   this.router.navigate(['/page3']) 
  }
  onFollower()
  {
    this.router.navigate(['/follower'])
  }
  onQueryParam()
  {
    this.router.navigate(['/queryparameter'],{
      queryParams:this.jsonObj
    })
  }

}
