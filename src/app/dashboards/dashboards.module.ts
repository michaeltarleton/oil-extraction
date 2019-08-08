import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataGridComponent } from './data-grid/data-grid.component'
import { FlexmonsterPivotModule } from 'ng-flexmonster'
import { ExtractionsDataGridComponent } from './extractions-data-grid/extractions-data-grid.component'
import { CurrentReservesComponent } from './current-reserves/current-reserves.component'
import { DailyExtractionsComponent } from './daily-extractions/daily-extractions.component'
import { ForecastingDepletionComponent } from './forecasting-depletion/forecasting-depletion.component'

@NgModule({
  declarations: [
    DataGridComponent,
    ExtractionsDataGridComponent,
    CurrentReservesComponent,
    DailyExtractionsComponent,
    ForecastingDepletionComponent,
  ],
  imports: [CommonModule, FlexmonsterPivotModule],
  exports: [
    DataGridComponent,
    ExtractionsDataGridComponent,
    CurrentReservesComponent,
    DailyExtractionsComponent,
    ForecastingDepletionComponent,
  ],
})
export class DashboardsModule {}
