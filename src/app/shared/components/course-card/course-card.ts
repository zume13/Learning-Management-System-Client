import { Component, input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  title = input('');
  instructor = input('');
  assignment = input('');
  coverColor = input('bg-indigo-600');
}
