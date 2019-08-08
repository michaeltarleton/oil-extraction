import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Report } from 'flexmonster'
import { data } from '../data/extractions.data'

@Component({
  selector: 'app-forecasting-depletion',
  templateUrl: './forecasting-depletion.component.html',
  styleUrls: ['./forecasting-depletion.component.scss'],
})
export class ForecastingDepletionComponent implements OnInit {
  flexMonsterKey: string = environment.flexMonsterTrialKey

  report: Report = {
    dataSource: {
      dataSourceType: 'json',
      data,
    },
    options: {
      grid: {
        type: 'flat',
        showTotals: false,
        showGrandTotals: 'off',
      },
      datePattern: 'MM/dd/yyyy',
    },
  }

  constructor() {}

  ngOnInit() {}
}
