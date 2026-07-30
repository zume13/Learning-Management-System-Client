import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseCard } from '../../course-card/course-card';
import { Dashboard } from '../../../../features/dashboard/pages/dashboard/dashboard';

@Component({
  selector: 'app-course-layout',
  imports: [RouterLink, CourseCard],
  templateUrl: './course-layout.html',
  styleUrl: './course-layout.css',
})
export class CourseLayout {
  title = '';
  instructor = '';
  description = '';

  constructor() {

    const course = history.state;

    this.title = course.title;
    this.instructor = course.instructor;
    this.description = course.description;
  }
  
}
