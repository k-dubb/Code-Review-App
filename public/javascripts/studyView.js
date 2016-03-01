(function(){

    angular.module('CodeReview')
        .directive('flash', studyView);

    function studyView(){

    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl =  "/templates/_studyView.html";
    // directive.scope = {
    //     question: '@'
    };

    return directive;

    });

})();