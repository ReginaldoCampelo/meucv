import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewCvComponent } from './pages/new-cv/new-cv.component';
import { EditCvComponent } from './pages/edit-cv/edit-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCvComponent,
    EditCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
