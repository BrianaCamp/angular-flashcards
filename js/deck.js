var deckModule = angular.module("flash.deck", []);

deckModule.controller("DeckController", function ($scope){
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

  var studyDeck;

  $scope.refreshStudyDeck = function() {
    studyDeck = [].concat(allCards);
    return studyDeck;
  };

  $scope.addCard = function(front, back){
    var newCard = {front: front, back: back};
    allCards.push(newCard);
    studyDeck.push(newCard); //why do we need to use study deck again if it's already being pushed into all cards?


  };



});
