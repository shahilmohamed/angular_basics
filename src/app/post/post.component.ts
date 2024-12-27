import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any[] = [];
  isHidden:boolean=true;
  id:string='';
  title:string='';
  body:string='';
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost()
  {
    this.service.getPost().subscribe((response:any)=>
    {
      console.log(response);
      this.post=response;
    })
  }
  onSend(inputTitle:string,inputBody:string)
  {
    let obj = {
      title:inputTitle,
      body:inputBody
    }
    this.service.SendData(obj)
    .subscribe((response)=>{
      console.log(response); 
    })
  }

  onEdit(item:any)
  {
    console.log(item); 
    this.isHidden=false;
    this.id=item.id;
    this.title=item.title;
    this.body=item.body;
  }

  onUpdate()
  {
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }
    this.service.UpdateData(obj)
    .subscribe((response)=>
    {
      console.log(response);
    })
  }

  onDelete(id:any)
  {
    this.service.DeleteData(id)
    .subscribe((response)=>
    {
      console.log(response);
    },(error)=>
    {
      alert('Page not found');
    })
  }

   

}
