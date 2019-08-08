import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Report, DataSource, Hierarchy } from 'flexmonster';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  constructor() { }

  flexMonsterKey: string = environment.flexMonsterTrialKey;

  data = [
    {
      site: 'Route 66',
      well: 'Alpha',
      oil: 15000,
      naturalGas: 0
    },
    {
      site: 'Route 66',
      well: 'Bravo',
      oil: 25000,
      naturalGas: 5000
    },
    {
      site: 'Route 66',
      well: 'Charlie',
      oil: 8000,
      naturalGas: 15000
    },
    {
      site: 'Hanamur',
      well: 'Alpha',
      oil: 5000,
      naturalGas: 5000
    },
    {
      site: 'Hanamur',
      well: 'Bravo',
      oil: 30000,
      naturalGas: 20000
    },
    {
      site: 'Numbani',
      well: 'Alpha',
      oil: 10000,
      naturalGas: 2500
    },
    {
      site: 'Numbani',
      well: 'Bravo',
      oil: 15000,
      naturalGas: 10000
    },
    {
      site: 'Numbani',
      well: 'Charlie',
      oil: 7500,
      naturalGas: 12500
    },
    {
      site: 'Numbani',
      well: 'Delta',
      oil: 16500,
      naturalGas: 13500
    }
  ];

  report: Report = {
    dataSource: {
      dataSourceType: 'json',
      data: this.data
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
