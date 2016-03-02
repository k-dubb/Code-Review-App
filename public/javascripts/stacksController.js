(function() {
  var app = angular.module('CodeReview');

  app.controller('StacksController', function($http) {
    this.newCard = { term: '', definition: '' };
    
    var self = this;

    $http({
      method: 'GET',
      url: '/api/study'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.stacks = response.data;

      return this;

    }, function errorCallback(response) {

    });

  });
  
})();

// (function() {
//     var app = angular.module('CodeReview', []);

//     app.controller('StacksController', function($scope) {

//     $scope.cards = [{ term: 'test1'}, {term: 'Test2'}];
    
//     });

// })();
