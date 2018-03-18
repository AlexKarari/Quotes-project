import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Quotes } from './quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() quote: Quotes;

  constructor() { }

  voteUp() {
    this.Quote.voteUp();
    return false;
  }
  voteDown() {
    this.Quote.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
