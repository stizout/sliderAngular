import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ModalComponent,
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
