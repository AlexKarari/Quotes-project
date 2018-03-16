import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addQuote(Quote: HTMLInputElement, Author: HTMLInputElement, Name: HTMLInputElement): boolean {
    console.log(`Adding famous quote: ${Quote.value}, Adding quote author: ${Author.value} and name: ${Name.value}`);
    return false;
  }
}
