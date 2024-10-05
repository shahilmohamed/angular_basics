import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor() { }
  c:number=0;

  addition(a:any,b:any)
  {
    let n1:number =+ a;
    let n2:number =+ b;
    this.c = n1+n2;
  }

  ngOnInit(): void {
  }

}
