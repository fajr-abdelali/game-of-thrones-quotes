import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character, Quote } from 'src/app/interface/GameOfThrones.interface';
import { PersonsService } from 'src/app/service/persons.service';
import { QuoteService } from 'src/app/service/quote.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  character!: Character;
  slug: string = '';

  constructor(private personsService: PersonsService,private quotesService:QuoteService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.router.snapshot.params['slug'];
    console.log(this.slug)
    this.personsService.getPersonBySlug(this.slug).subscribe(characetr => this.character = characetr[0])
  }

  loadMoreQuotes() {
    console.log(this.character);
    this.quotesService.getQuotes().subscribe((quotes: Quote[]) => {
      // Update the quotes array with the new quotes
      console.log(quotes);
      this.character.quotes = quotes.map(q => q.sentence);
    });
  }

}
