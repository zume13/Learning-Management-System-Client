import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Home } from './features/home/pages/home/home';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { Todo } from './features/todo/pages/todo/todo';
import { DashboardLayout } from './shared/components/dashboard-layout/dashboard-layout';
import { CourseLayout } from './shared/components/course-layout/course-layout/course-layout';

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
        path: 'courselayout',
        component: CourseLayout
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];