(function(){

    angular.module('CodeReview')
        .directive('top', homeView);

    function homeView(){

        var directive = {};
        directive.restrict = 'E';
        // directive.replace = true;
        directive.templateUrl =  "/templates/_homeView.html";
        // directive.scope = {
        //     term: '@'
        // };

    return directive;

    };

})();

