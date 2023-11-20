import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseListComponent } from './house-list.component';
import { FormsModule } from '@angular/forms';
import { House } from 'src/app/interface/GameOfThrones.interface';

describe('HouseListComponent', () => {
  let component: HouseListComponent;
  let fixture: ComponentFixture<HouseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseListComponent],
      imports: [FormsModule],
    });
    fixture = TestBed.createComponent(HouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter houses based on searchText', () => {
    // Set up initial data
    const houses: House[] = [
      { name: 'Stark', slug: '', members: [{ name: 'Jon Snow', slug: '' }] },
      { name: 'Lannister', slug: '', members: [{ name: 'Tyrion Lannister', slug: '' }] },
      { name: 'Targaryen', slug: '', members: [{ name: 'Daenerys Targaryen', slug: '' }] },
    ];

    component.houses = houses;

    // Trigger the search
    component.searchText = 'Stark';
    component.onSearch();

    // Expect the filteredHouses to contain only matching items
    expect(component.filteredHouses).toContain(
      { name: 'Stark', slug: '', members: [{ name: 'Jon Snow', slug: '' }] },
    );
  });
  
});
