import { Component } from '@angular/core';
import { CourseCard } from '../../../../shared/components/course-card/course-card';

@Component({
  selector: 'app-dashboard',
  imports: [CourseCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
