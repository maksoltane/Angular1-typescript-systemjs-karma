import * as angular from 'angular';

import {techsModule} from './app/techs/index';

import {main} from './app/main/main';
import {header} from './app/header/header';
import {title} from './app/title/title';
import {footer} from './app/footer/footer';

angular
  .module('app', [techsModule])
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
