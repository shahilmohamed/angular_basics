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
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
