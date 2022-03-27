import { Component, OnInit } from '@angular/core';
import data from './data';
import { scaleLinear } from 'd3-scale';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css'],
})
export class LinechartComponent implements OnInit {
  public radiusByLength:any = {};
  public lineData:any = [];
  constructor() {}


  ngOnInit(): void {
    console.log(data[0]);
    console.log(scaleLinear);
    let x = scaleLinear()
        .domain([1, 3])
        .range([10, 20]);
    console.log(x(471));

    data[0].activity_value.forEach((item:any) => {
      item.radius = x(item.docs.length);
    });

    this.lineData = data[0].activity_value;

  }
}
