import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

import { HomeComponent } from './pages/home/home.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-form', component: TemplateFormComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
