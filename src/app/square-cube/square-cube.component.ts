import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square-cube',
  templateUrl: './square-cube.component.html',
  styleUrls: ['./square-cube.component.css']
})
export class SquareCubeComponent implements OnInit {

  constructor() { }
  num: number=0;
  result: number=0;
  bgcolor:string=''
  txtcolor:string=''
  pflag:boolean=false;
  btnbg:string =''
  btnclr:string =''
  btnfont:string=''
  genimage:string=''
  btnflag:boolean=false;

  onchange(myevent:any)
  {
    this.num =+myevent.target.value;

  }
  oncube()
  {
    this.result=this.num*this.num*this.num
  }
  onsquare()
  {
     this.result=this.num*this.num
  }

  onClick()
  {
    if(!this.pflag)
    {
      this.bgcolor = 'red'
    this.txtcolor= 'white'
    this.pflag=true;
    }
    else{
      this.bgcolor='white'
      this.txtcolor='black'
      this.pflag=false;
    }
  }

  onButton()
  {
    if (!this.btnflag) {
      this.btnbg='red'
    this.btnclr='white'
    this.btnfont='italic'
    this.btnflag=true
      
    }
    else
    {
      this.btnbg='white'
      this.btnclr='black'
      this.btnfont=''
      this.btnflag=false
    }
  }

  onImage()
  {
    this.genimage='../../assets/image.png'
  }

  ngOnInit(): void {
  }

}
