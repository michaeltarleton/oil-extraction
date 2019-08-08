import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Report } from 'flexmonster';

import { data } from '../data/extractions.data';

@Component({
  selector: 'app-extractions-data-grid',
  templateUrl: './extractions-data-grid.component.html',
  styleUrls: ['./extractions-data-grid.component.scss'],
})
export class ExtractionsDataGridComponent implements OnInit {
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

  ngOnInit() {}
}
