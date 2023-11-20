import { Component, OnInit } from '@angular/core';
import { HouseService } from 'src/app/service/house.service';
import { Character, House } from 'src/app/interface/GameOfThrones.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-members',
  templateUrl: './house-members.component.html',
  styleUrls: ['./house-members.component.scss']
})
export class HouseMembersComponent implements OnInit {
  house?: House;
  slug: string = '';
  constructor(private houseService: HouseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
    this.houseService.getHouseBySlug(this.slug).subscribe((house: House[]) => {
      this.house = house[0];
    });

  }

}
