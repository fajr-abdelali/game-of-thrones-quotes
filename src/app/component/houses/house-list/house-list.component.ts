import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/service/house.service';
import { House } from '../../../interface/GameOfThrones.interface'
import { Router } from '@angular/router';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  houses: House[] = [];
  filteredHouses: House[] = [];
  searchText: string = '';


  constructor(private houseService: HouseService, private router: Router) { }


  ngOnInit() {
    this.houseService.getHouses().subscribe((houses: House[]) => {
      this.houses = houses;
      this.filteredHouses= houses;
    });
  }

  onSearch() {
    console.log(this.searchText)
    this.filteredHouses = this.houses.filter(house => {
      return house.name.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }

}
