import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {
  public beer?: any;
  public activeTab: string = 'description';
  public isMobile: boolean = false;

  constructor(
    private beerService: BeerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.beerService.getBeerById(id))
      )
      .subscribe((beer) => {
        if (!beer) return this.router.navigate(['/beers/list']);
        this.beer = beer[0];
        return;
      });


    const CUSTOM_BREAKPOINTS = {
      XS: '(max-width: 768px)',
    };
    this.breakpointObserver
      .observe([CUSTOM_BREAKPOINTS.XS])
      .subscribe((result) => {
        this.isMobile = result.matches;
        if (this.isMobile) this.activeTab = '';
        else this.activeTab = 'description';
      });
    console.log(this.isMobile);
  }

  goBack(): void {
    this.router.navigateByUrl('beers/list');
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
