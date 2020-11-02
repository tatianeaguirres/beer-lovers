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
    this.searchBeers(this.foodPairing[0]);
    this.activeIndex = 0;
  }

  onFilterByFoodPairing(food: string, index: number) {
    this.searchBeers(food);
    this.activeIndex = index;
  }

  searchBeers(food: string) {
    this.isFetching = true;
    this.beersService.searchBeers('food', food, '4').subscribe(
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
