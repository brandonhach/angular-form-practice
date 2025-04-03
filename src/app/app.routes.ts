import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'dynamic-form', component: DynamicFormComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
