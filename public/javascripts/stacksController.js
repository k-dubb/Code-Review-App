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
      
      // angular.forEach(response.data, function(value, key){
      //   console.log(key + ' : ' + value)      
      // })

      return this;


    }, function errorCallback(response) {

    });
    

    var counter = 0;

    this.nextCard = function() {
      counter++;

      index++;
      console.log('next!');
    }

    this.showCard = function(index) {
      if (counter === index) {
        return true;
      }
      return false;
    }

    // this.showDefintion = function(index) {
    //   if (counter === index) {
    //     return true;
    //   }
    //   return false;
    // }

  });


    // $('#thumbsdown').on('click', function(){
    //       console.log('NEXT');
    //       counter++;
    // });

})();

// (function() {
//     var app = angular.module('CodeReview', []);

//     app.controller('StacksController', function($scope) {

//     $scope.cards = [{ term: 'test1'}, {term: 'Test2'}];
    
//     });

// })();
