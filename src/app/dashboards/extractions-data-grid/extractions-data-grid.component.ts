import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Report, DataSource, Hierarchy } from 'flexmonster';

@Component({
  selector: 'app-extractions-data-grid',
  templateUrl: './extractions-data-grid.component.html',
  styleUrls: ['./extractions-data-grid.component.scss']
})
export class ExtractionsDataGridComponent implements OnInit {

  flexMonsterKey: string = environment.flexMonsterTrialKey;

  data = [
    {
      site: 'Route 66',
      well: 'Alpha',
      extractionDate: new Date(2016, 7, 1),
      oil: 250,
      naturalGas: 0
    },
    {
      site: 'Route 66',
      well: 'Alpha',
      extractionDate: new Date(2016, 7, 4),
      oil: 30,
      naturalGas: 0
    },
    {
      site: 'Route 66',
      well: 'Alpha',
      extractionDate: new Date(2016, 7, 5),
      oil: 275,
      naturalGas: 0
    },
    {
      site: 'Route 66',
      well: 'Alpha',
      extractionDate: new Date(2016, 7, 6),
      oil: 250,
      naturalGas: 0
    },
    {
      site: 'Route 66',
      well: 'Alpha',
      extractionDate: new Date(2016, 7, 7),
      oil: 325,
      naturalGas: 0
    },
    {
      site: 'Route 66',
      well: 'Alpha',
      extractionDate: new Date(2016, 7, 8),
      oil: 315,
      naturalGas: 0
    },
    {
      site: 'Numbani',
      well: 'Delta',
      extractionDate: new Date(2016, 8, 1),
      oil: 175,
      naturalGas: 350
    },
    {
      site: 'Numbani',
      well: 'Delta',
      extractionDate: new Date(2016, 8, 2),
      oil: 190,
      naturalGas: 325
    },
    {
      site: 'Numbani',
      well: 'Delta',
      extractionDate: new Date(2016, 8, 3),
      oil: 210,
      naturalGas: 400
    },
    {
      site: 'Numbani',
      well: 'Delta',
      extractionDate: new Date(2016, 8, 4),
      oil: 225,
      naturalGas: 200
    },
    {
      site: 'Numbani',
      well: 'Delta',
      extractionDate: new Date(2016, 8, 5),
      oil: 200,
      naturalGas: 180
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
