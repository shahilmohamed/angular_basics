import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() parentDta:string=''
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
  // pro:string='child data'
  @Output() ChildArrObjData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSend()
  {
    this.ChildArrObjData.emit(this.product)
    // this.ChildArrObjData.emit(this.pro)
  }

}
