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

  voteConfig: {
    cssClass: 'my-class',
    allowEdit: true,
    disabled: false
  };
  votes: 10; // total amount of votes
  selectedVote: 0; // not voted yet

  onVote(vote) {
    console.log('onVote response: ', vote);
  }

  constructor() {


}
}
