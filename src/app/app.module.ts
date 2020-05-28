import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { UserComponent } from './view/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './view/error/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
