import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../shared/beers.service';

import { Beer } from '../../shared/beer.model';

@Component({
  selector: 'app-food-pairing',
  templateUrl: './food-pairing.component.html',
  styleUrls: ['./food-pairing.component.scss']
})
export class FoodPairingComponent implements OnInit {
  beers: Beer[] = [];
  isFetching = false;
  error = null;

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.onFetchBeers();
  }

  onFetchBeers() {
    this.isFetching = true;
    this.beersService.fetchBeerByFood().subscribe(
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
