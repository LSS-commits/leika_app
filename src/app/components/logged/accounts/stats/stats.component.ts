import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createLineChart();
    this.createBarChart();
  }



  createBarChart() {
    // TODO:
    // const labels = get transaction date ?
    // data = get sum of transaction amount
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    const barChart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Click here to clear chart',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            // 'rgba(255, 99, 132, 0.2)', // red
            // 'rgba(75, 192, 192, 0.2)', // green
            'rgba(224, 182, 66, 0.2)',  // gold
            'rgba(8, 8, 8, 0.2)'        // black     
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(75, 192, 192, 1)',
            'rgba(224, 182, 66, 1)',
            'rgba(8, 8, 8, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  createLineChart() {

    const NUMBER_CFG = { min: -100, max: 100 };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Negative Amount Transactions',
          data: [-28, -9, -13, -30, -26, -30, -12],
          borderColor: 'rgba(220, 53, 69, 1)',
          backgroundColor: 'rgba(220, 53, 69, 0.2)', // red
        },
        {
          label: 'Positive Amount Transactions',
          data: [190, 10, 12, 12, 30, 15, 140],
          borderColor: 'rgba(12, 197, 40, 1)',
          backgroundColor: 'rgba(12, 197, 40, 0.2)', // green
        }
      ]
    };
    const lineChart = new Chart( "lineChart", {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart'
          }
        }
      },
    });
  }

}
