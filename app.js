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
});
