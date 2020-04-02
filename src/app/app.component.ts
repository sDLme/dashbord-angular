import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Temperature info';
  tempObj: [];
  powerObj = {voltage: 0, current: 0, power: 0, energy: 0, frequency: 0};
  constructor(private httpService: HttpClient, private query: HttpClient ) {
  }
  ngOnInit() {
    this.loadData();
    setInterval( () =>  {
      this.loadData();
    }, 3000);
  }
  loadData() {
    this.httpService.get('http://192.168.1.5/temperature.php').subscribe(
      response => {
        // @ts-ignore
        this.tempObj = response.data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
    this.query.get('http://192.168.1.133/info.json').subscribe(
      response => {
        // @ts-ignore
        this.powerObj = response;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
  }
}
