import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {MainLayoutComponent} from "./layouts";
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./components/home/home.component";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {NgbAlertModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
