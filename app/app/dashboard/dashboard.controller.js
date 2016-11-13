import {config} from '../config';

export class DashboardController {
  constructor ($http, $log) {
    'ngInject';

    this.$http = $http;
    this.$log = $log;
    this.getNews();
  }

  getNews() {
    var self = this;
    let newsURL = 'http://steamcommunity.com/groups/ahud/rss';
    this.$http.get(newsURL).then(function(response) {
      //console.log(response.data);
      //self.onGetNews(response, self);
    }, this.onErr);

    //this.$http.get(config.API_URL + '/api/news').then(function(response) {
    //  self.onGetNews(response, self);
    //}, this.onErr);
  }

  onGetNews(response, self) {
    self.news = response.data;
    self.$log.debug(response.data);
  }

  onErr() {
    alert('Error: News can\'t be loaded, try again.');
  }
}