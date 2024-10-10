import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  data:string='Parent Data'
  receiveArrData:any='';
  // receiveData:any='';

  constructor() { }

  ngOnInit(): void {
  }

}
