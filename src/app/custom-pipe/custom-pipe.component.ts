import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, facere. Porro, sunt aut! Tempora debitis doloribus repellat obcaecati quidem quod optio porro commodi. Impedit harum, voluptatum neque accusantium error magnam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, facere. Porro, sunt aut! Tempora debitis doloribus repellat obcaecati quidem quod optio porro commodi. Impedit harum, voluptatum neque accusantium error magnam!'
  constructor() { }

  ngOnInit(): void {
  }

}
