import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TrendingSubjectsComponent } from './components/trending-subjects/trending-subjects.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchSubjectsComponent } from './components/search-subjects/search-subjects.component';
import { SearchTableViewComponent } from './shared/search-table-view/search-table-view.component';
import { TableViewComponent } from './shared/table-view/table-view.component';


@NgModule({
  declarations: [AppComponent, TrendingSubjectsComponent, HomeComponent, SearchSubjectsComponent, SearchTableViewComponent,TableViewComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
