import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Chart, ChartType } from 'chart.js';
import 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart!: Chart;
  constructor(private api:ApiService){  }
  count:any;
 //chart data
 TotalArr:any=[];
 ClosedArr:any=[];
 result:any;
  barChartData:any;
  barHeight:any=50;
  ngOnInit(): void {

    if(window.innerWidth<700){
    this.barHeight=100;
    }
  this.api.chartData().subscribe((res:any)=>{
    this.result=res;
    this.TotalArr=res.total[0]
    this.ClosedArr=res.closed[0]
    this.barChartData= [
    {
      data:this.TotalArr,
      label: 'Total',
      backgroundColor: '#035FB2',
    },
    {
      data: this.ClosedArr,
      label: 'Closed',
      backgroundColor: '#5AA647'

    }
  ];
  })
  this.api.countData().subscribe((res:any):any=>{
    this.count=res[0];
  })

  }

   barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    barThickness: 7,
    maxBarThickness: 8,
    barPadding:20,
    borderRadius:12,
    legend: {
      display: true
    },
    tooltips:{
      enabled:false
    },
    elements:{
      point:{
        radius:0
      }
    },
  };
   barChartLabels = ['STR','FIN','QLT','MAN','STO','HR'];
  //  barChartType = 'bar';
   barChartType: ChartType = "bar";
   barChartLegend = true;
}


