import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interface/GameOfThrones.interface';
import { PersonsService } from 'src/app/service/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  characters: Character[] = [];
  filtredCharacter: Character[] = [];
  searchText: string = '';

  constructor(private personesService: PersonsService) { }

  ngOnInit(): void {
    this.personesService.getPersons().subscribe((persones: Character[]) => {
      this.characters = persones
      this.filtredCharacter = persones;
    })
  }

  onSearch() {
    this.filtredCharacter = this.characters.filter(character => {
      return character.name.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }

}
