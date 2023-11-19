import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/service/house.service';
import { House } from '../../../interface/GameOfThrones.service'

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {

  houses: House[] = [];
  constructor(private houseService: HouseService) { }
  ngOnInit() {
    this.houseService.getHouses().subscribe((houses: House[]) => {
      this.houses = houses;
    });
  }

}
