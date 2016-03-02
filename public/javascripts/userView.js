(function(){

    angular.module('CodeReview')
        .directive('usersPage', userView);

    function userView(){

        var directive = {};
        directive.restrict = 'E';
        directive.replace = true;
        directive.templateUrl =  "/templates/_userView.html";
        // directive.scope = {
        //     question: '@'
    // };

    return directive;

    };

})();