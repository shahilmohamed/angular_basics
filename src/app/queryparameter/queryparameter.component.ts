import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetDataFromUrl();
  }

  GetDataFromUrl()
  {
    this.route.queryParamMap
    .subscribe((params)=>
    {
      console.log("Id::"+params.get('id'));
      console.log("First Namd::"+params.get('fname'));
      console.log("Last name::"+params.get('lname'));
    })

  }

}
