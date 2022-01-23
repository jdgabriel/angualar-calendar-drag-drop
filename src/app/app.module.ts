import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent],
  imports: [DragDropModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
