import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit, AfterViewInit {

  @ViewChild('divtemp') myDiv!:ElementRef;
  @ViewChild(Child2Component) mychild!:Child2Component;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.myDiv)
    this.myDiv.nativeElement.style.background='red';
    this.myDiv.nativeElement.style.color='white'
  }

  ngOnInit(): void {
  }

  onMethod()
  {
    this.mychild.onsend();

  }

  onProperty()
  {
    this.mychild.name="Shahil"
  }

}
