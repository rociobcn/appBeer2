import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerRoutingModule } from './beers-routing.module';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBeerComponent } from './components/card-beer/card-beer.component';




@NgModule({
  declarations: [
    LayoutComponent,
    BeerPageComponent,
    ListPageComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    CardBeerComponent

  ],
  imports: [
    CommonModule,
    BeerRoutingModule,
  ]
})
export class BeersModule { }
