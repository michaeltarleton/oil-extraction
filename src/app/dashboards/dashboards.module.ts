import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { ExtractionsDataGridComponent } from './extractions-data-grid/extractions-data-grid.component';



@NgModule({
  declarations: [DataGridComponent, ExtractionsDataGridComponent],
  imports: [
    CommonModule,
    FlexmonsterPivotModule
  ],
  exports: [DataGridComponent]
})
export class DashboardsModule { }
