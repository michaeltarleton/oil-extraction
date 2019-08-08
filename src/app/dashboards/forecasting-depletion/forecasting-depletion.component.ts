import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core'
import { environment } from 'src/environments/environment'
import { Report } from 'flexmonster'
import { data as extractionData, data } from '../data/extractions.data'
import { data as reserveData } from '../data/reserves.data'

interface ExtractionDataPoint {
  site: string
  well: string
  extractionDate: Date
  oil: number
  naturalGas: number
}

interface WellType {
  oil
  naturalGas
}
interface DepletionResult {
  date: Date
  oilDepletedAmount: number
  remainingOil: number
  naturalGasDepletedAmount: number
  remainingNaturalGas: number
}

interface Well {
  name: string
  dates: Date[]
  depletionResults: DepletionResult[]
}
interface Site {
  name: string
  wells: Well[]
}

@Component({
  selector: 'app-forecasting-depletion',
  templateUrl: './forecasting-depletion.component.html',
  styleUrls: ['./forecasting-depletion.component.scss'],
})
export class ForecastingDepletionComponent implements OnInit {
  constructor() {}
  flexMonsterKey: string = environment.flexMonsterTrialKey

  currentDate = new Date(2016, 6, 1).toISOString()

  // 1. Sort by date/time (side-effect of the slice is we don't mutate anything)
  // slicing at "1" to remove the first object in the array which is the definition line.
  newExtractionData = extractionData
    .slice(1)
    .sort(
      (a: ExtractionDataPoint, b: ExtractionDataPoint) =>
        a.extractionDate.getTime() - (b.extractionDate as Date).getTime()
    )
    // Group by site
    .reduce((sites: Site[], dataPoint: ExtractionDataPoint) => {
      let site = sites.find(s => s.name === dataPoint.site)

      // if no site exists then initialize a new one
      if (!site) {
        site = {
          name: dataPoint.site,
          wells: [],
        }
        sites.push(site)
      }

      let well = site.wells.find(w => w.name === dataPoint.well)
      // if no site exists then initialize a new one
      if (!well) {
        well = {
          name: dataPoint.well,
          dates: [],
          depletionResults: [],
        }
        site.wells.push(well)
      }

      const lastDataPoint = well.depletionResults[well.depletionResults.length - 1]
      const lastRemainingOilDepletionTotal = lastDataPoint
        ? lastDataPoint.remainingOil
        : reserveData.find(r => r.site === dataPoint.site && r.well === dataPoint.well).oil
      const lastRemainingNaturalGasDepletionTotal = lastDataPoint
        ? lastDataPoint.remainingNaturalGas
        : reserveData.find(r => r.site === dataPoint.site && r.well === dataPoint.well).naturalGas

      const newDepletionResult: DepletionResult = {
        date: dataPoint.extractionDate,
        oilDepletedAmount: dataPoint.oil,
        naturalGasDepletedAmount: dataPoint.naturalGas,
        remainingNaturalGas: lastRemainingNaturalGasDepletionTotal - dataPoint.naturalGas,
        remainingOil: lastRemainingOilDepletionTotal - dataPoint.oil,
      }

      well.depletionResults.push(newDepletionResult)

      return sites
    }, [])

  report: Report = {
    dataSource: {
      dataSourceType: 'json',
      data: this.newExtractionData,
    },
    slice: {
      rows: [
        {
          uniqueName: '[Measures]',
        },
      ],
      columns: [
        {
          uniqueName: 'site',
        },
      ],
      measures: [
        {
          uniqueName: 'site',
          aggregation: 'sum',
        },
      ],
    },
    options: {
      viewType: 'charts',
      configuratorActive: false,
      configuratorButton: false,
      chart: {
        type: 'column',
        showMeasures: false,
        showFilter: false,
      },
    },
  }

  ngOnInit() {
    console.log(this.newExtractionData)
  }
}
