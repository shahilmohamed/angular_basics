import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prodArr=[
    {
      name:'Nokia',
      price:20000,
      qty:1
    },
    {
      name:'Lava',
      price:10000,
      qty:2
    },
    {
      name:'Samsung',
      price:30000,
      qty:3
    },
    {
      name:'Apple',
      price:50000,
      qty:4
    }
  ]

}
