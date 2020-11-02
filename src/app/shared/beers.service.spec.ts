import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from '../../testing/async-observable-helpers';

import { Beer } from './beer.model';
import { BeersService } from './beers.service';

import beerMock from './beer-mock.json';

describe('BeersService', () => {

  describe('#getRandomBeer (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let beersService: BeersService;

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      beersService = new BeersService(httpClientSpy as any);
    });

    it('should return expected beer (HttpClient called once)', () => {
      const expectedBeer: Beer[] = beerMock;

      httpClientSpy.get.and.returnValue(asyncData(expectedBeer));

      beersService.getRandomBeer().subscribe(
        beer => expect(beer).toEqual(expectedBeer, 'expected beer'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      beersService.getRandomBeer().subscribe(
        beer => fail('expected an error, not beer'),
        error  => expect(error.message).toContain('test 404 error')
      );
    });
  });

  describe('#getRandomBeer (with mocks)', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let beersService: BeersService;
    let expectedBeer: Beer[];

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ],
        providers: [ BeersService ]
      });

      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      beersService = TestBed.inject(BeersService);
      expectedBeer = beerMock as Beer[];
    });

    afterEach(() => {
      httpTestingController.verify();
    });

    it('should return expected beers (called once)', () => {
      beersService.getRandomBeer().subscribe(
        beer => expect(beer).toEqual(expectedBeer, 'should return expected beer'),
        fail
      );

      const req = httpTestingController.expectOne(beersService.randomBeerUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedBeer);
    });

    it('should be OK returning no beers', () => {
      beersService.getRandomBeer().subscribe(
        beer => expect(beer.length).toEqual(0, 'should have empty beer array'),
        fail
      );

      const req = httpTestingController.expectOne(beersService.randomBeerUrl);
      req.flush([]);
    });

    it('should turn 404 into a user-friendly error', () => {
      const msg = 'Deliberate 404';
      beersService.getRandomBeer().subscribe(
        beer => fail('expected to fail'),
        error => expect(error.message).toContain(msg)
      );

      const req = httpTestingController.expectOne(beersService.randomBeerUrl);

      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });

    it('should return expected beer (called multiple times)', () => {
      beersService.getRandomBeer().subscribe();
      beersService.getRandomBeer().subscribe();
      beersService.getRandomBeer().subscribe(
        beer => expect(beer).toEqual(expectedBeer, 'should return expected beer'),
        fail
      );

      const requests = httpTestingController.match(beersService.randomBeerUrl);
      expect(requests.length).toEqual(3, 'calls to getRandomBeer()');

      requests[0].flush([]);
      requests[1].flush(beerMock);
      requests[2].flush(expectedBeer);
    });

  });

  describe('#searchBeers (with spies)', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let beersService: BeersService;
    const param = 'food';
    const term = 'salad';
    const perPage = '4';

    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      beersService = new BeersService(httpClientSpy as any);
    });

    it('should return expected beers (HttpClient called once)', () => {
      const expectedBeers: Beer[] = beerMock;

      httpClientSpy.get.and.returnValue(asyncData(expectedBeers));

      beersService.searchBeers(param, term, perPage).subscribe(
        beers => expect(beers).toEqual(expectedBeers, 'expected beers'),
        fail
      );
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      httpClientSpy.get.and.returnValue(asyncError(errorResponse));

      beersService.searchBeers(param, term, perPage).subscribe(
        beers => fail('expected an error, not beers'),
        error  => expect(error.message).toContain('test 404 error')
      );
    });

  });

});
