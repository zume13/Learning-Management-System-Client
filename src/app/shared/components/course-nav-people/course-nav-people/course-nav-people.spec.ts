import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNavPeople } from './course-nav-people';

describe('CourseNavPeople', () => {
  let component: CourseNavPeople;
  let fixture: ComponentFixture<CourseNavPeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseNavPeople],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseNavPeople);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
