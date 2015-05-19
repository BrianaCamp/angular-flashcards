var flashApp = angular.module("flash", []);
flashApp.controller("CardController", function ($scope) {
  $scope.cards = [
    { front: "how many licks does it take to get to the center of a lollipop?",
      back: "345"
    },
    { front: "are you a badass?",
      back: "yes"
    },
    { front: "Did NASA really call Ingrid?",
      back: "Definitely not for code, but maybe for something suspicious."
    }

  ];
}
);
