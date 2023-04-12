import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { TrendingSubjectsComponent } from './components/trending-subjects/trending-subjects.component';
import { SearchSubjectsComponent } from './components/search-subjects/search-subjects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Open Books Library',
  },
  {
    path: 'trending-subject/:name',
    component: TrendingSubjectsComponent,
    title: 'Trending Subjects',
  },
  {
    path: 'search/:name',
    component: SearchSubjectsComponent,
    title: 'Search Books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
