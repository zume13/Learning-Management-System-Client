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

  readonly events: CalendarEvent[] = [
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

  private generateCalendar(): void {

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    this.calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      this.calendarDays.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      this.calendarDays.push(day);
    }

  }

  private changeMonth(offset: number): void {

    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + offset,
      1
    );

    this.selectedDay = null;

    this.generateCalendar();

  }

  previousMonth(): void {
    this.changeMonth(-1);
  }

  nextMonth(): void {
    this.changeMonth(1);
  }

  selectDay(day: number | null): void {

    if (day === null) {
      return;
    }

    this.selectedDay = day;

  }

  get monthName(): string {

    return this.currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });

  }

  get selectedDateLabel(): string {

    if (this.selectedDay === null) {
      return '';
    }

    const selectedDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      this.selectedDay
    );

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });

    return this.isToday(this.selectedDay)
      ? `Today • ${formattedDate}`
      : formattedDate;

  }

  get selectedEvents(): CalendarEvent[] {

    if (this.selectedDay === null) {
      return [];
    }

    return this.getEvents(this.selectedDay);

  }

  get selectedEventLabel(): string {

    const count = this.selectedEvents.length;

    switch (count) {
      case 0:
        return 'No assignments';

      case 1:
        return '1 assignment';

      default:
        return `${count} assignments`;
    }

  }

  getEvents(day: number | null): CalendarEvent[] {

    if (day === null) {
      return [];
    }

    return this.events.filter(event => event.day === day);

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

}