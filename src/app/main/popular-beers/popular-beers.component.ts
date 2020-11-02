import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../shared/beers.service';

import { Beer } from '../../shared/beer.model';

@Component({
  selector: 'app-popular-beers',
  templateUrl: './popular-beers.component.html',
  styleUrls: ['./popular-beers.component.scss']
})
export class PopularBeersComponent implements OnInit {
  beers: Beer[] = [];
  isFetching = false;
  error = null;
  beerTypes = ['IPA', 'Lager', 'Stout', 'Pale Ale', 'Porter', 'Weisse'];
  activeIndex: number;

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.searchBeers(this.beerTypes[0]);
    this.activeIndex = 0;
  }

  onFilterByBeerType(type: string, index: number) {
    this.activeIndex = index;
    this.searchBeers(type);
  }

  searchBeers(type: string) {
    this.isFetching = true;
    this.beersService.searchBeers('beer_name', type, '4').subscribe(
      beer => {
        this.isFetching = false;
        this.beers = beer;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }
}
