var deckModule = angular.module("flash.deck", []);

deckModule.controller("DeckController", function ($scope){
  var allDecks = [
    { name : "deck 0",
      cards : [
        { front: "deck 0, card 0",
          back: "back 0"
        },
        { front: "deck 0, card 1",
          back: "back 1"
        }
      ]
    },
    { name : "deck 1",
      cards : [
        { front: "deck 1, card 0",
          back: "back 0"
        },
        { front: "deck 1, card 1",
          back: "back 1"
        }
      ]
    }
  ];



  var studyDeck;

  $scope.decks = allDecks;

  // var allCards = allDecks[0].cards;

  $scope.refreshStudyDeck = function(deckNumber) {
    studyDeck = [].concat(allDecks[deckNumber].cards);
    return studyDeck;
  };

  $scope.addCard = function(front, back, index){
    var newCard = {front: front, back: back};
    allDecks[index].cards.push(newCard);
    studyDeck.push(newCard); //why do we need to use study deck again if it's already being pushed into all cards?
  };



});
