import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { FlexmonsterPivotModule } from 'ng-flexmonster';



@NgModule({
  declarations: [DataGridComponent],
  imports: [
    CommonModule,
    FlexmonsterPivotModule
  ],
  exports: [DataGridComponent]
})
export class DashboardsModule { }
