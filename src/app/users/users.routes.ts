import { Routes } from '@angular/router';
import { TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks', // <your-domain>/users/1/tasks
    component: TasksComponent,
  },
  {
    path: 'tasks/new', // <your-domain>/users/1/tasks/new
    component: NewTaskComponent,
  },
];
