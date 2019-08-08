import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexmonsterPivotModule } from 'ng-flexmonster';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardsModule } from './dashboards/dashboards.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexmonsterPivotModule,
    DashboardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
