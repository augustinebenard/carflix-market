import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarMarketComponent } from './components/car-market/car-market.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { HireInspectorComponent } from './components/hire-inspector/hire-inspector.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'hireInspector', component:HireInspectorComponent},
  {path:'questionnaire', component:QuestionnaireComponent},
  {path:'carMarket', component:CarMarketComponent},
  {path:'view-article', component:ArticleDetailsComponent},
  {path:'car-detail/:id', component:CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
