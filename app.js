var flashApp = angular.module("flash", []);
flashApp.controller("CardController", function ($scope) {
  $scope.cards = [
    { front: "1",
      back: "2"
    },
    { front: "3",
      back: "4"
    },
    { front: "5",
      back: "6"
    }

  ];
  $scope.current = 0; //card to display
  $scope.front = true;

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


});
