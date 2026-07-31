import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNavInfo } from './course-nav-info';

describe('CourseNavInfo', () => {
  let component: CourseNavInfo;
  let fixture: ComponentFixture<CourseNavInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseNavInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseNavInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
