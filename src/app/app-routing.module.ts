import { HireInspectorComponent } from './components/hire-inspector/hire-inspector.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: '',redirectTo:'', pathMatch:'full' },
  {path:'', component:HomeComponent},
  {path:'hireInspector', component:HireInspectorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
