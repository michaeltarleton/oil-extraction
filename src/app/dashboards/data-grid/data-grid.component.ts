import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Report, DataSource, Hierarchy } from 'flexmonster';
import { data } from '../data/reserves.data';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  constructor() { }

  flexMonsterKey: string = environment.flexMonsterTrialKey;

  report: Report = {
    dataSource: {
      dataSourceType: 'json',
      data
    },
    options: {
      grid: {
        type: 'flat',
        showTotals: false,
        showGrandTotals: 'off'
      }
    }
  };

  ngOnInit() {
  }

}
