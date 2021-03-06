import * as angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('fountainFooter', ['src/app/footer/footer.html'])
      .component('fountainFooter', footer);
    module('fountainFooter');
  });

  it('should render \'FountainJS team\'', inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<fountain-footer></fountain-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('FountainJS team');
  }));
});
