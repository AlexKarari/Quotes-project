import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addQuote(Quote: InputElement, Author: InputElement, Name: InputElement): boolean {
    console.log(`Adding famous quote: ${quote.value}, Adding quote author: ${author.value} and name: ${name.value}`);
    return false;
  }
