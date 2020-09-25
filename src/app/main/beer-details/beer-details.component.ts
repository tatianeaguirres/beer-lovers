import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from '../../shared/beer.model';

import { BeersService } from './../../shared/beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit {
  id: string;
  beers: Beer[] = [];
  error = null;
  isFetching = false;

  constructor(private route: ActivatedRoute, private beersService: BeersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.onFetchBeers(this.id);
  }

  onFetchBeers(id: string) {
    this.isFetching = true;
    this.beersService.fetchBeerById(id).subscribe(
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
