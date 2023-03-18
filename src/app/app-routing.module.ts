import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { VoteComponent } from './vote/vote.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vote/:id', component: VoteComponent },
  { path: 'results/:id', component: ResultsComponent },
  { path: 'create-event', component: CreateFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
