angular.module('myApp').controller('mainCtrl', function($scope,srvc) {
//Display quotes
  $scope.getQuotes = function(){
    $scope.quotes = srvc.getQuotes();
};
$scope.getQuotes();
//add Quotes
$scope.addData = function(newQuote){
  srvc.addData(newQuote);
  $scope.newQuote = '';
};
//remove quotes
$scope.removeData = function(index){
  srvc.removeData(index);
};

});
