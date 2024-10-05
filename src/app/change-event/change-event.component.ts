import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent implements OnInit {

  constructor() { }

  onchange(myevent:any)
  {
    console.log("Change event occured")
    // console.log(myevent.value)
    console.log(myevent.target.value);
  }
  ngOnInit(): void {
  }

}
