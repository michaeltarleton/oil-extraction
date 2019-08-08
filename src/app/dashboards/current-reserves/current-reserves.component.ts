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
