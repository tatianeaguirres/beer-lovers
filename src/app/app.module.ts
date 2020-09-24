import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './main/banner/banner.component';
import { PopularBeersComponent } from './main/popular-beers/popular-beers.component';
import { FoodPairingComponent } from './main/food-pairing/food-pairing.component';
import { BeerExpertComponent } from './main/beer-expert/beer-expert.component';
import { BeerDetailsComponent } from './main/beer-details/beer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BannerComponent,
    PopularBeersComponent,
    FoodPairingComponent,
    BeerExpertComponent,
    BeerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
