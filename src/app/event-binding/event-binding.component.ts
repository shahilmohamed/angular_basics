import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  flag:boolean=true;
  onClick()
  {
    if(this.flag)
    {
      console.log("Click event is occured")
      this.flag=false
    }
  }
  onDollerElement(myevent:any)
  {
    console.log(myevent);
    console.log(myevent.target.value)

  }

  onSend(inputName:any)
  {
    console.log(inputName)
    console.log(inputName.value)
    inputName.style.background='green';
    inputName.style.color='white';
  }

  ngOnInit(): void {
  }

}
