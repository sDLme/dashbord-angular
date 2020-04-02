import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {range} from 'rxjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  @Input() tempValue: number;
  @Input() tempLabel: string;
  @Input() temp: string;
  @Input() min = 0;
  @Input() max  = 100;
  @Input() step  = 20;
  canvasWidth = 300;
  options = {
    arcLabels: [ '20', '40', '60', '80'],
    hasNeedle: true,
    needleUpdateSpeed: 0,
    needleStartValue: 50,
    arcColors: ['rgb(104, 237, 43)', 'rgb(195, 237, 43)', 'rgb(237, 205, 43)', 'rgb(237, 159, 43)', 'rgb(237, 62, 43)'],
    arcDelimiters: [20, 40, 60, 80],
    rangeLabel: [ '0', '100'],
  };
   convertRange( value: number, r1, r2 ): number {
     return ( value - r1[ 0 ] ) * ( r2[ 1 ] - r2[ 0 ] ) / ( r1[ 1 ] - r1[ 0 ] ) + r2[ 0 ];
  }
  myRange(min: number, max: number, step: number) {
     const arr = [];
     let count = min;
     let stop = 0;
     while ( (count < max) && stop < 100) {
       stop++;
       count  = count + step;
       arr.push(count);
    }
     return arr;
  }
  ngOnInit() {
      this.options.rangeLabel = [ this.min + '', this.max + ''];
      const newStep = (this.max - this.min) / 5;
      this.options.arcLabels = this.myRange(this.min, this.max, newStep);
      this.tempValue = this.convertRange(this.tempValue, [this.min , this.max ], [ 0, 100] );
  }
  ngOnChanges() {
    this.tempValue = this.convertRange(this.tempValue, [this.min , this.max ], [ 0, 100] );
  }
}
