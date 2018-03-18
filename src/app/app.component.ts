import { Component } from '@angular/core';
import { Quotes } from './quote/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quotes[];

  constructor() {
    this.quotes = [
      new Quotes('Success usually comes to those who are too busy to be looking for it.', 'Henry David Thoreau', 'Xander', 4),
      new Quotes('No one can make you feel inferior without your consent.', 'Eleanor Roosevelt', 'Mary' 2),
      new Quotes('The fear of death follows from the fear of life. A man who loves fully is prepared to die at any time.', 'Mark Twain', 'Don', 1),
    ];
  }
  addQuotes(Quote: string, Author: string, Name: string): boolean {
    console.log(`Adding quotes Quote: ${Quote.value}, Author: ${Author.value}and Name: ${Name.value}`);
    this.Quote.push(new Quotes(Quote.value, Author.value, Name.value, 0));
    Quote.value = '';
    Author.value = '';
    Name.value = '';
    return false;
  }
}
