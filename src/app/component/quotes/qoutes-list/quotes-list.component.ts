import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interface/GameOfThrones.interface';
import { QuoteService } from 'src/app/service/quote.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements OnInit {

  quotes: Quote[] = [];

  constructor(private quotesService: QuoteService) { }

  ngOnInit(): void {
    this.initSubscription()
  }

  initSubscription() {
    this.quotesService.getQuotes().subscribe((quotes: Quote[]) => {
      this.quotes = quotes;
    });
  }

}
