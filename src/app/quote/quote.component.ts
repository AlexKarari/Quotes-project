import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [];

  completeQuote(isComplete, index) {
       if (isComplete) {
           this.quotes.splice(index, 1);
           }
           }
addNewQuote(quote) {
this.quotes.push(quote);
}


  constructor() { }


  ngOnInit() {
  }

}
