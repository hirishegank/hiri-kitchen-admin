import { Sales } from './../Sales';
import { ReviewServiceService } from './../reviewService.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private _nlp: ReviewServiceService) { }

  BarChart1 = [];
  BarChart2 = [];

  ngOnInit() {

    this._nlp.getnextWeekSalesPrediction().subscribe((response: Sales) => {
      console.log(response);
    });

    this.BarChart1 = new Chart('barChartChef', {
      type: 'bar',
      data: {
        labels: ['Renukadevi','Karuneswaran','Shamnas','Ram Kumar'],
        datasets: [{
          label: '# orders',
          data: [52,50,51,50],
          backgroundColor: 'rgb(34, 181, 115)',
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Most Popular Chef",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



    this.BarChart2 = new Chart('barChartFood', {
      type: 'bar',
      data: {
        labels: ['Chilly Beef','Gulab Jamun','Prawn Pickle','Idli'],
        datasets: [{
          label: '# orders',
          data: [67,54,53,74],
          backgroundColor: 'rgb(34, 181, 115)',
          borderWidth: 1
        }]
      },
      options: {
        title: {
          text: "Most Popular Food",
          display: true
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });


  }

}


