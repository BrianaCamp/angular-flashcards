var flashApp = angular.module("flash", []);
flashApp.controller("DeckController", function ($scope){
  var allCards = [
    { front: "1- front",
      back: "2 -back"
    },
    { front: "3 - front",
      back: "4 - back"
    },
    { front: "5 - front",
      back: "6 - back"
    }

  ];

  $scope.copyDeck = function() {
    return [].concat(allCards);
  };
});
flashApp.controller("StudyController", function ($scope) {


  function init() {
    $scope.cards = $scope.$parent.copyDeck();
    $scope.current = 0; //card to display
    $scope.front = true;
  }

  init();

  $scope.reset = init;



  $scope.next = function () {
    var step = +(!$scope.front); // change cards if on back
    $scope.move(step);
  };

  $scope.previous = function () {
    var step = -($scope.front);
    $scope.move(step);
  };

  $scope.move = function(step) {
    var numCards = $scope.cards.length;
    $scope.current = ($scope.current + step + numCards) % numCards;
    $scope.front = !$scope.front;
  };

  $scope.gotIt = function() {
    $scope.front = true;
    $scope.cards.splice($scope.current, 1);
    $scope.current = $scope.current % $scope.cards.length;
  };


});
