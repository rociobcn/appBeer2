import { Component } from '@angular/core';
import { Beer } from '../../interfaces/beer.interface';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent {
  public beers: Beer[] = [];
  page = 1;
  perPage = 12;

  constructor(private beerService: BeerService) {}

  ngOnInit(): void {
   this.loadMoreBeers();
  }

  loadMoreBeers() {
    console.log(this.page)
    this.beerService.getBeers(this.page, this.perPage).subscribe(
      (newBeers) => {
        this.beers = [...this.beers, ...newBeers];
        this.page++;
      },
      (error) => {
        console.log('Error al cargar las cervezas: ', error);
      }
    );
  }
}
