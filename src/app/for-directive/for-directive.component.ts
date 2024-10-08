import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  constructor() { }

  rowname:string=''
  name:string[] = ['Shahil','Dhilshath','Baig','Ashik']
  product = [
    {
        proname:'Redmi',
        proprice:12000,
        proqty:25
    },
    {
      proname:'Realme',
      proprice:22000,
      proqty:200
    },
    {
      proname:'Samsung',
      proprice:32000,
      proqty:2500
    },
    {
      proname:'Apple',
        proprice:42000,
        proqty:250
    }

  ]
  mouseOv(it:any)
  {
    this.rowname=it.proname;
    console.log("Mouse over occured")
  }

  mouseOt()
  {
    this.rowname='';
  }

  ngOnInit(): void {
  }

}
