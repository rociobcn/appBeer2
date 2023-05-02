import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { PageNotFoundComponent } from '../shared/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent},
      { path: 'list', component: ListPageComponent },
      { path: '404', component: PageNotFoundComponent },
      { path: ':id', component: BeerPageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
