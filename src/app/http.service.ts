import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url:string='https://jsonplaceholder.typicode.com/posts';
  // private url:string ='http://localhost:8080/getstaffdata';
  constructor(private http:HttpClient) { }
   getPost()
   {
    return (this.http.get(this.url));
   }
   SendData(obj:any)
   {
    return (this.http.post(this.url,obj));
   }
   UpdateData(obj:any)
   {
    return (this.http.put(`${this.url}/${obj.id}`,obj))
   }
   DeleteData(id:any)
   {
    return (this.http.delete(`${this.url}/${id}`));
   }
}
