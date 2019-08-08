import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Report } from 'flexmonster'
import { data } from '../data/reserves.data'

@Component({
  selector: 'app-current-reserves',
  templateUrl: './current-reserves.component.html',
  styleUrls: ['./current-reserves.component.scss'],
})
export class CurrentReservesComponent implements OnInit {
  flexMonsterKey: string = environment.flexMonsterTrialKey

  report: Report = {
    dataSource: {
      dataSourceType: 'json',
      data,
    },
    slice: {
      rows: [
        {
          uniqueName: 'site',
        },
        {
          uniqueName: 'well',
        },
      ],
      columns: [
        {
          uniqueName: '[Measures]',
        },
      ],
      measures: [
        {
          uniqueName: 'Total Oil Reserves',
          formula: 'sum("oil")',
          caption: 'Total Oil Reserves',
        },
        {
          uniqueName: 'Total Natural Gas Reserves',
          formula: 'sum("naturalGas")',
          caption: 'Total Natural Gas Reserves',
        },
      ],
    },
    options: {
      viewType: 'charts',
      grid: {
        showTotals: false,
        showGrandTotals: 'off',
      },
      chart: {
        activeMeasure: {
          uniqueName: 'Total Oil Reserves',
          aggregation: 'none',
        },
      },
    },
  }

  constructor() {}

  ngOnInit() {}
}
