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
  isLoadingImage: boolean;
  beerColor: any = null;
  beerColorName: any = null;
  beerColorTable = [
    ['#FFFC46', 2, 'Pale Straw'],
    ['#FFE93D', 3, 'Straw'],
    ['#FED849', 4, 'Pale Gold'],
    ['#FFA847', 6, 'Deep Gold'],
    ['#F49F44', 9, 'Pale Amber'],
    ['#D77F59', 12, 'Medium Amber'],
    ['#94523A', 15, 'Deep Amber'],
    ['#804541', 18, 'Amber-Brown'],
    ['#5B342F', 20, 'Brown'],
    ['#4C3B2B', 24, 'Ruby Brown'],
    ['#38302E', 30, 'Deep Brown'],
    ['#31302C', 40, 'Black']
  ];

  constructor(private route: ActivatedRoute, public beersService: BeersService) {
    this.isLoadingImage = true;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.searchBeers(this.id);
  }

  searchBeers(id: string) {
    this.isFetching = true;
    this.beersService.searchBeers('ids', id, '1').subscribe(
      beer => {
        this.isFetching = false;
        this.beers = beer;
        if (this.beers[0].srm) { this.onDeterminesBeerColor(this.beers[0].srm); }
      },
      error => {
        this.isFetching = false;
        this.error = error;
      }
    );
  }

  onDeterminesBeerColor(srm: number) {
    this.beerColorTable.sort((a: any, b: any) => {
      return Math.abs(a[1] - srm) - Math.abs(b[1] - srm);
    });
    this.beerColor = this.beerColorTable[0][0];
    this.beerColorName = this.beerColorTable[0][2];
  }

  onHideImageLoader() {
    this.isLoadingImage = false;
  }

}
