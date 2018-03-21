import { Component, Input } from '@angular/core';
import {Quote} from './quote';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    new Quote ('Better safe than sorry', 'Albert', 'Alex'),
  ];

  constructor() {


}
}
