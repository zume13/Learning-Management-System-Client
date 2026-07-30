import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseCard } from '../../../../shared/components/course-card/course-card';


@Component({
  selector: 'app-dashboard',
  imports: [ RouterLink, CourseCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
