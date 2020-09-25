import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../shared/beers.service';

import { Beer } from '../../shared/beer.model';

@Component({
  selector: 'app-beer-expert',
  templateUrl: './beer-expert.component.html',
  styleUrls: ['./beer-expert.component.scss']
})
export class BeerExpertComponent implements OnInit {
  beers: Beer[] = [];
  error = null;

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.onFetchBeers();
  }

  onFetchBeers() {
    this.beersService.fetchRandomBeer().subscribe(
      beers => {
        this.beers = beers;
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
