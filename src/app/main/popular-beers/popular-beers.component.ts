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

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.onFetchBeers(this.beerTypes[0]);
  }

  onFilterByBeerType(type: string) {
    this.onFetchBeers(type);
  }

  onFetchBeers(type: string) {
    this.isFetching = true;
    this.beersService.fetchBeerByType(type).subscribe(
      beers => {
        this.isFetching = false;
        this.beers = beers;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

}
