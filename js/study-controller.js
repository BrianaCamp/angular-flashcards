var studyModule = angular.module("flash.controllers.study", []);


studyModule.controller("StudyController", function ($scope) {


  function init() {
    $scope.cards = $scope.$parent.refreshStudyDeck();//with us referencing studydeck, we aren't really using the original data of allCards?
    $scope.current = 0; //card to display
    $scope.front = true;
  }


  init();

  $scope.reset = init; //why doesn't this have a parenthesis?



  $scope.next = function () {
    var step = +(!$scope.front); // change cards if on back
    $scope.move(step); //since move is defined below, shouldn't it cause an error?
  };

  $scope.previous = function () {
    var step = -($scope.front);
    $scope.move(step);
  };

  $scope.move = function(step) {
    var numCards = $scope.cards.length;
    $scope.current = ($scope.current + step + numCards) % numCards;//still don't understand?
    $scope.front = !$scope.front;
  };

  $scope.gotIt = function() {
    $scope.front = true;
    $scope.cards.splice($scope.current, 1);
    $scope.current = ($scope.current % $scope.cards.length) || 0;
  };


});
