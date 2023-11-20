import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { HouseMembersComponent } from './house-members.component';
import { HouseService } from 'src/app/service/house.service';
import { House } from 'src/app/interface/GameOfThrones.interface';

describe('HouseMembersComponent', () => {
  let component: HouseMembersComponent;
  let fixture: ComponentFixture<HouseMembersComponent>;
  let mockActivatedRoute: any;
  let mockHouseService: jasmine.SpyObj<HouseService>;

  beforeEach(() => {
    mockActivatedRoute = {
      params: of({ slug: 'some-slug' }) // Use the of() to create an Observable
    };

    mockHouseService = jasmine.createSpyObj('HouseService', ['getHouseBySlug']);

    TestBed.configureTestingModule({
      declarations: [HouseMembersComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HouseService, useValue: mockHouseService }
      ]
    });

    fixture = TestBed.createComponent(HouseMembersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve house details on init', () => {
    const mockHouse: House[] = [{ name: 'Stark', slug: 'stark', members: [] }];
    mockHouseService.getHouseBySlug.and.returnValue(of(mockHouse));

    fixture.detectChanges(); // Trigger ngOnInit

    expect(component.house).toEqual(mockHouse[0]);
    expect(mockHouseService.getHouseBySlug).toHaveBeenCalledWith('some-slug');
  });
});
