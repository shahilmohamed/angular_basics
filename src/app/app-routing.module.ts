import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyFollowerComponent } from './my-follower/my-follower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { TelevisionComponent } from './product/television/television.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'page1',component:Page1Component
  },
  {
    path:'page2/:id',component:Page2Component
  },
  {
    path:'page3',component:Page3Component
  },
  {
    path:'follower',component:FollowerComponent
  },
  {
    path:'my-follower',component:MyFollowerComponent
  },
  {
    path:'queryparameter',component:QueryparameterComponent
  },
  {
    path:'product',children:[
      {
        path:'',component:ProductComponent
      },
      {
        path:'laptop',component:LaptopComponent
      },
      {
        path:'mobile',component:MobileComponent
      },
      {
        path:'tv',component:TelevisionComponent
      }
    ]
  },
  {
    path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
