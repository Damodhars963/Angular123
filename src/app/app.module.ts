import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';



const paths:Routes =[
{path:'demo',loadChildren:'./demo/demo.module#DemoModule'},
{path:"**", redirectTo:'demo'}
]

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(paths),
    BrowserAnimationsModule,    
   // DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//we installed npm install --save @angular/flex-layout also for flexbox