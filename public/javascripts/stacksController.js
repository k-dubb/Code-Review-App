// (function() {

//     var app = angular.module('CodeReview');

    
//     app.controller('StacksController', function(){
//         this.question = "TESTING!";
//         return this;
//     });
// })();

(function() {

    var app = angular.module('CodeReview');

app.controller('CodeReview', function(){
    this.message = "I couldn't complete my homework because _________.";

    this.cards = [
        {question: "What is Batman's guilty pleasure?"},
        {question: "I couldn't complete my homework because _________."},
        {question: "I get by with a little help from _________."},
        {question: "_________. It's a trap!"},
        {question: "The class field trip was completely ruined by _________."},
        {question: "What's my secret power?"}
    ];

        return this;
    });