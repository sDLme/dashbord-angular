import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() tempValue: number;
  @Input() tempLabel: string;
  @Input() temp: string;
  canvasWidth = 500;
  options = {
    arcLabels: [ '20', '40', '60', '80'],
    hasNeedle: true,
    needleUpdateSpeed: 1000,
    needleStartValue: 50,
    arcColors: ['rgb(104, 237, 43)', 'rgb(195, 237, 43)', 'rgb(237, 205, 43)', 'rgb(237, 159, 43)', 'rgb(237, 62, 43)'],
    arcDelimiters: [20, 40, 60, 80],
    rangeLabel: ['0', '100'],
  };
}
