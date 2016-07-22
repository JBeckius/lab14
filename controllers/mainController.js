var app = angular.module('router');
app.controller('mainController', function($scope, $location) {
  //array for storing views for retrieval
  var viewArr = ["view1", "view2", "view3", "view4"];
  //place in the viewArr
  var counter = 0;
  $scope.next = function() {
    //goes forward one view in the array
    counter++;
    if ( counter === viewArr.length ) {
      counter = 0;
    }
    $location.path("/" + viewArr[counter]);
    // return "#/" + viewArr[counter];
  };
  $scope.prev = function() {
    // goes back one view in the array
    counter--;
    if (counter < 0) {
      counter = viewArr.length - 1;
    }
    $location.path("/" + viewArr[counter]);
    // return "#/" +viewArr[counter];
  };
});
