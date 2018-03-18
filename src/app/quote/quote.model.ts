export class Quotes {

  Quote: string;
  Author: string;
  Name: string;
  votes: number;

  constructor(Quote: string, Author: string, Name: string, votes?: number) {
    this.Quote = Quote;
    this.Author = Author;
    this.Name = Name;
    this.votes = votes || 0;
  }
  voteUp(): void {
    this.votes += 1;
  }
  voteDown(): void {
    this.votes += 1;
  }

  /*domain(): string {
    try {
      const domainAndPath: string = this.Quote.split('//')[1];
      return domainAndPath.split('/')[0];
    }
    catch (err) {
      return null;
    }
  }*/
}
