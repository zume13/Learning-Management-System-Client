import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseCard } from '../../../../shared/components/course-card/course-card';
import { LucideArrowRight } from '@lucide/angular';

@Component({
  selector: 'app-dashboard',
  imports: [ RouterLink, CourseCard, LucideArrowRight],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
