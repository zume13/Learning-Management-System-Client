import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNavActivity } from './course-nav-activity';

describe('CourseNavActivity', () => {
  let component: CourseNavActivity;
  let fixture: ComponentFixture<CourseNavActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseNavActivity],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseNavActivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
