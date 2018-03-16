import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  votes: number;
  Quote: string;
  Author: string;
  Name: string;

  constructor() {
    this.Quote = 'Moral indignation is a jealousy with a halo';
    this.Author = 'H.G. WELLS.'
    this.Name = 'Hussein Malik'
    this.votes = 0;
  }

  voteUp() {
    this.votes +=1;
    return false;
  }
  voteDown() {
    this.votes +=1;
    return false;
  }

  ngOnInit() {
  }

}
