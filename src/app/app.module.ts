import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { StudentComponent } from './student/student.component';
import { AdditionComponent } from './addition/addition.component';
import { ChangeEventComponent } from './change-event/change-event.component';
import { SquareCubeComponent } from './square-cube/square-cube.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Parent2Component } from './parent2/parent2.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SummaryPipe } from './utility/summary.pipes';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    StringInterpolationComponent,
    StudentComponent,
    AdditionComponent,
    ChangeEventComponent,
    SquareCubeComponent,
    TwoWayBindingComponent,
    IfDirectiveComponent,
    ForDirectiveComponent,
    SwitchDirectiveComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    Parent2Component,
    InbuildPipeComponent,
    CustomPipeComponent,
    SummaryPipe,
    CourseComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
