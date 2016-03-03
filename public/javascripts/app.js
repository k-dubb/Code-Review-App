(function() {
  var app = angular.module('CodeReview', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    // home page
      .state('home', {
        url: '/',
        templateUrl: '/templates/_homeView.html'
      })
      // show user's stacks of flashcards
      .state('user', {
        url: '/user',
        templateUrl: '/templates/_userView.html'
      })
      // build your own flashcard stack
      .state('add', {
        url: '/user/stack',
        templateUrl: '/templates/_stackView.html'
      })
      // go thru the flashcards
      .state('study', {
        url: '/study',
        templateUrl: '/templates/_studyView.html'
      })
  });

})();