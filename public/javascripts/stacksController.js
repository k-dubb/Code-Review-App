(function() {
  
  var app = angular.module('CodeReview');

  app.controller('StacksController', function($http) {
    this.newCard = { term: '', definition: '' };
    this.currentCard = { term: '', definition: '' };
    this.index = 0;

    var self = this;

    $http({
      method: 'GET',
      url: '/api/study'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.stacks = response.data;

      console.log(response.data);

      self.currentCard = {
        term: response.data[self.index]['cards'][0].term,
        definition: response.data[self.index]['cards'][0].definition
      };
      console.log('got here');

      return self;

    }, function errorCallback(response) {

    });

    var counter = 0;

    this.nextCard = function() {
      self.index++;

      self.currentCard = {
        term: self.stacks[self.index]['cards'][0].term,
        definition: self.stacks[self.index]['cards'][0].definition
      };

      console.log('next!');
    }

  });

})();