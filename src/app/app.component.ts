import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Temperature chart info';
  tempObj: any;
  constructor(private httpService: HttpClient) {
  }
  ngOnInit() {
    this.httpService.get('http://192.168.1.5/temperature.php').subscribe(
      response => {
        // @ts-ignore
        this.tempObj = response.data;
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      });
  }
}
