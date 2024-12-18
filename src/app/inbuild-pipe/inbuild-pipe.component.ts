import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  constructor() { }

  strData:string='Hello everyone I am Shahil'
  num2:number = -456.1325924;
  mydate = new Date(); 

  ngOnInit(): void {
  }

}
