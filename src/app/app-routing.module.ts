import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { HireInspectorComponent } from './components/hire-inspector/hire-inspector.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '',redirectTo:'', pathMatch:'full' },
  {path:'', component:HomeComponent},
  {path:'hireInspector', component:HireInspectorComponent},
  {path:'questionnaire', component:QuestionnaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
