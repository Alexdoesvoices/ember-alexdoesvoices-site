import EmberRouter from '@ember/routing/router';
import config from 'ember-alexdoesvoices-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('equipment');
  this.route('portfolio');
  this.route('magic');
});
