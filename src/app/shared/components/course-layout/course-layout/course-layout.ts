import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-layout',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
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
