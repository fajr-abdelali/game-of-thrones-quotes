import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesComponent } from './houses.component';
import { HouseListComponent } from './house-list/house-list.component';

describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousesComponent, HouseListComponent]
    });
    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include HouseListComponent in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const houseListComponent = compiled.querySelector('app-house-list');

    expect(houseListComponent).toBeTruthy();
  });
});
