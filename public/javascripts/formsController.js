// Controller for the form
(function() {
  
    var app = angular.module('CodeReview');

    app.controller('FormsController', function($scope, $http) {

        // var self = this;

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            $http.post('/user', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.stacks = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

            console.log('Card saved!')
        });

})();