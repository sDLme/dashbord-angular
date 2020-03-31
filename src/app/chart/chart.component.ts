import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() tempValue: number;
  @Input() tempLabel: string;
  canvasWidth = 500;
  options = {
    hasNeedle: true,
    needleUpdateSpeed: 1000,
    needleStartValue: 50,
    arcColors: ["rgb(255,84,84)","rgb(239,214,19)","rgb(61,204,91)"],
    arcDelimiters: [40,60],
    rangeLabel: ['0', '100'],
  };
}
