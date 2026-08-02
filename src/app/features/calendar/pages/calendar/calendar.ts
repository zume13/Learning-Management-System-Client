import { Component } from '@angular/core';
import { LucideChevronLeft, LucideChevronRight } from '@lucide/angular';

interface CalendarEvent {
  day: number;
  title: string;
  subject: string;
  color: 'red' | 'orange' | 'blue' | 'green' | 'purple';
}

@Component({
  selector: 'app-calendar',
  imports: [LucideChevronLeft, LucideChevronRight],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {

  currentDate = new Date();

  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  calendarDays: (number | null)[] = [];

  selectedDay: number | null = null;

  events: CalendarEvent[] = [
    {
      day: 2,
      title: 'Finish Angular Dashboard',
      subject: 'Web Development',
      color: 'red'
    },
    {
      day: 7,
      title: 'Read Chapter 4',
      subject: 'Database Systems',
      color: 'orange'
    },
    {
      day: 7,
      title: 'Quiz Review',
      subject: 'Web Development',
      color: 'blue'
    },
    {
      day: 15,
      title: 'UI/UX Wireframe',
      subject: 'UI/UX Design',
      color: 'green'
    },
    {
      day: 23,
      title: 'Machine Problem',
      subject: 'Programming',
      color: 'purple'
    }
  ];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar(): void {

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.calendarDays = [];

    // empty cells before the first day
    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push(null);
    }

    // days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      this.calendarDays.push(day);
    }
  }

  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate = new Date(this.currentDate);
    this.selectedDay = null;
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate = new Date(this.currentDate);
    this.selectedDay = null;
    this.generateCalendar();
  }

  get monthName(): string {
    return this.currentDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });
  }

  get selectedDateLabel(): string {

    if (this.selectedDay === null) {
      return '';
    }

    const date = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      this.selectedDay
    );

    const label = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });

    if (this.isToday(this.selectedDay)) {
      return `Today • ${label}`;
    }

    return label;

  }

  isToday(day: number | null): boolean {

    if (day === null) {
      return false;
    }

    const today = new Date();

    return (
      day === today.getDate() &&
      this.currentDate.getMonth() === today.getMonth() &&
      this.currentDate.getFullYear() === today.getFullYear()
    );
  }

  getEvents(day: number | null): CalendarEvent[] {

    if (day === null) {
      return [];
    }

    return this.events.filter(event => event.day === day);
  }

  selectDay(day: number | null): void {

    if (day === null) {
      return;
    }

    this.selectedDay = day;
  }

  get selectedEventLabel(): string {

    const count = this.selectedEvents.length;

    if (count === 0) {
      return 'No assignments';
    }

    if (count === 1) {
      return '1 assignment';
    }

    return `${count} assignments`;

  }

  get selectedEvents(): CalendarEvent[] {

    if (this.selectedDay === null) {
      return [];
    }

    return this.getEvents(this.selectedDay);
  }

}