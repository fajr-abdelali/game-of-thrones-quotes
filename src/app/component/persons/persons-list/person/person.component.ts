import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interface/GameOfThrones.interface';
import { PersonsService } from 'src/app/service/persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  character!: Character;
  slug: string = '';

  constructor(private personsService: PersonsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => this.slug = params['slug']);
    console.log(this.slug)
    this.personsService.getPersonBySlug(this.slug).subscribe(characetr => this.character = characetr[0])
  }

}
