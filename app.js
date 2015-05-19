var flashApp = angular.module("flash", []);
flashApp.controller("CardController", function ($scope) {
  $scope.cards = [
    { front: "how many licks",
      back: "345"
    },
    { front: "badass?",
      back: "yes"
    },
    { front: "NASA call Ingrid?",
      back: "Definitely not."
    }

  ];
  $scope.current = 0; //card to display
  $scope.front = true;

  $scope.next = function () {
    var move = +(!$scope.front); // change cards if on back
    var numCards = $scope.cards.length;

    $scope.current = ($scope.current + move) % numCards;
    $scope.front = !$scope.front;
  };

});
