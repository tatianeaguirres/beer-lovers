import { browser, logging, by, element } from 'protractor';

describe('Beer Lovers App', () => {

  beforeAll(() => {
    browser.get(browser.baseUrl);
  });

  it('should display logo', () => {
    expect(element(by.id('header-logo')).getText()).toEqual('beerlovers');
  });

  describe('Popular Beers', () => {

    it('should navigate to popular beers', () => {
      const linkPopularBeers = element(by.id('link-popular-beers'));

      expect(linkPopularBeers.getText()).toEqual('Popular Beers');
      expect(linkPopularBeers.getAttribute('href')).toContain('#popular-beers');

      linkPopularBeers.click();

      expect(element(by.id('title-popular-beers')).getText()).toEqual('Popular Beers');
    });

    it('should have the IPA beer button selected by default', () => {
      expect(element(by.id('IPA-popular-beer-button')).getAttribute('class')).toContain('active');
    });

    it('should have 4 IPA beers displayed', () => {
      const beerList = element.all(by.css('.c-popular-beers .c-beer-item'));

      expect(beerList.count()).toBe(4);

      beerList.each((listItem) => {
        expect(listItem.element(by.css('.beer-item__title')).getText()).not.toBeNull();
        expect(listItem.element(by.css('.beer-item__description')).getText()).not.toBeNull();
      });
    });

    it('should click on the Stout beer button and receive the selected style', () => {
      const stoutBeerButton = element(by.id('Stout-popular-beer-button'));

      stoutBeerButton.click();

      expect(stoutBeerButton.getAttribute('class')).toContain('active');
    });

    it('should click on the first beer in the list and go to beer details', () => {
      const beerList = element.all(by.css('.c-popular-beers .c-beer-item'));

      beerList.first().click();

      expect(browser.getCurrentUrl()).toContain('/beer/');
      expect(element(by.id('beer-name')).getText()).not.toBeNull();
      expect(element(by.id('beer-description')).getText()).not.toBeNull();
    });

  });

  describe('Beer Expert', () => {

    it('should navigate to beer expert', () => {
      const linkBeerExpert = element(by.id('link-beer-expert'));

      expect(linkBeerExpert.getText()).toEqual('Beer Expert');
      expect(linkBeerExpert.getAttribute('href')).toContain('#beer-expert');

      linkBeerExpert.click();

      expect(element(by.id('title-beer-expert')).getText()).toEqual('Discover your beer!');
      expect(element(by.id('description-beer-expert')).getText()).toEqual('Our beer expert will choose a beer for you. Are you ready?');
      expect(element(by.id('button-beer-expert')).getText()).toEqual('Show me');
    });

    it('should click on the "show me" button and go to beer details', () => {
      element(by.id('button-beer-expert')).click();

      expect(browser.getCurrentUrl()).toContain('/beer/');
      expect(element(by.id('beer-name')).getText()).not.toBeNull();
      expect(element(by.id('beer-description')).getText()).not.toBeNull();
    });

  });

  describe('Food Pairing', () => {

    it('should navigate to food pairing', () => {
      const linkFoodPairing = element(by.id('link-food-pairing'));

      expect(linkFoodPairing.getText()).toEqual('Food Pairing');
      expect(linkFoodPairing.getAttribute('href')).toContain('#food-pairing');

      linkFoodPairing.click();

      expect(element(by.id('title-food-pairing')).getText()).toEqual('Food Pairing');
    });

    it('should have the Salad button selected by default', () => {
      expect(element(by.id('Salad-food-pairing-button')).getAttribute('class')).toContain('active');
    });

    it('should have 4 beers that pairing with salad displayed', () => {
      const beerList = element.all(by.css('.c-food-pairing .c-beer-item'));

      expect(beerList.count()).toBe(4);

      beerList.each((listItem) => {
        expect(listItem.element(by.css('.beer-item__title')).getText()).not.toBeNull();
        expect(listItem.element(by.css('.beer-item__description')).getText()).not.toBeNull();
      });
    });

    it('should click on the Pasta button and receive the selected style', () => {
      const pastaButton = element(by.id('Pasta-food-pairing-button'));

      pastaButton.click();

      expect(pastaButton.getAttribute('class')).toContain('active');
    });

    it('should click on the first beer in the past list and go to beer details', () => {
      const pastaButton = element(by.id('Pasta-food-pairing-button'));
      const beerList = element.all(by.css('.c-food-pairing .c-beer-item'));

      pastaButton.click();

      beerList.first().click();

      expect(browser.getCurrentUrl()).toContain('/beer/');
      expect(element(by.id('beer-name')).getText()).not.toBeNull();
      expect(element(by.id('beer-description')).getText()).not.toBeNull();
    });

  });

  describe('About', () => {

    it('should navigate to about', () => {
      const linkAbout = element(by.id('link-about'));

      expect(linkAbout.getText()).toEqual('About');
      expect(linkAbout.getAttribute('href')).toContain('/about');

      linkAbout.click();

      expect(browser.getCurrentUrl()).toContain('/about');
      expect(element(by.id('title-about')).getText()).toEqual('About Beer Lovers');
      expect(element(by.css('.about__tech-stack>h3')).getText()).toEqual('Tech Stack');
      expect(element(by.css('.about__credits>h3')).getText()).toEqual('Credits');
    });

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
