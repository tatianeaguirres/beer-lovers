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
  foodPairing = ['Salad', 'Beef', 'Chicken', 'Fish', 'Pasta', 'Burger'];
  activeIndex: number;

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.onFetchBeers(this.foodPairing[0]);
    this.activeIndex = 0;
  }

  onFilterByFoodPairing(food: string, index: number) {
    this.activeIndex = index;
    this.onFetchBeers(food);
  }

  onFetchBeers(food: string) {
    this.isFetching = true;
    this.beersService.fetchBeerByFood(food).subscribe(
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
