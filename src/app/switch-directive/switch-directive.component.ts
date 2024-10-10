import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {
  choice:string='black'

  constructor() { }

  onsend(value:string)
  {
    this.choice=value.toLowerCase().trim();
  }

  ngOnInit(): void {
  }

}
