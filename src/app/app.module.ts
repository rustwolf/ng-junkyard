import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { LearningRxjsComponent } from './learning-rxjs/learning-rxjs.component';


// Trying Standalone components from angular 14
@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    LearningRxjsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
