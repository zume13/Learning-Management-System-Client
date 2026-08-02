import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Home } from './features/home/pages/home/home';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Todo } from './features/todo/pages/todo/todo';
import { DashboardLayout } from './shared/components/dashboard-layout/dashboard-layout';
import { CourseLayout } from './shared/components/course-layout/course-layout/course-layout';
import { CourseNavActivity } from './shared/components/course-nav-activity/course-nav-activity/course-nav-activity';
import { CourseNavPeople } from './shared/components/course-nav-people/course-nav-people/course-nav-people';
import { CourseNavInfo } from './shared/components/course-nav-info/course-nav-info/course-nav-info';
import { Calendar } from './features/calendar/pages/calendar/calendar';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'todo',
        component: Todo
      },
      {
        path: 'calendar',
        component: Calendar
      },
      {
        path: 'courselayout',
        component: CourseLayout,
        children: [
          {
            path:'',
            redirectTo: 'activity',
            pathMatch: 'full'
          },
          {
            path:'activity',
            component: CourseNavActivity
          },
          {
            path: 'people',
            component: CourseNavPeople
          },
          {
            path: 'info',
            component: CourseNavInfo
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];