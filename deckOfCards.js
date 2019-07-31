//ASSUMPTION - bottom of deck is at index 0

function DeckOfCards() {
    this.deck = [],
    // initialize cards with loop
    this.initializeDeck = function () { 
        var suits = ["heart", "club", "diamond", "spades"];
        var values = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < values.length; j++) {
                var card = {};
                card.suit = suits[i];
                card.values = values[j];
                this.deck.push(card);
            }
        }
    },

    this.shuffle = function () {
    
        for (var i = 0; i < this.deck.length; i++) {
            // remove 1 card at the randomIndex and insert the card at the current index value
            this.deck.splice(Math.floor(Math.random() * this.deck.length), 1, this.deck[i])
        }

        return this.deck

    },

    // sory by suit & number ascending
    this.sortByIndex = function() {
        
    },

    // aH,aD,aS,aC, 2H,2D,2S,2C, 3H,3D,3S,3C
    this.sortByNumber = function() {

    },

    this.sortByColor = function() {

    },

    this.drawFromTop = function () {
        return this.deck.pop();

    },

    this.drawRandom = function () {
        var randomDraw = Math.floor(Math.random() * this.deck.length);
        var drawnCard = this.deck[randomDraw];
        this.deck.splice(randomDraw, 1)
        return drawnCard
    },

    this.insertOnBottom = function () {

    },

    this.insertRandom = function (playersCard) {
        var playersCard = this.playersCard;
        var randomInsert = Math.floor(Math.random() * this.deck.length);
        this.deck.splice(randomInsert, 0, playersCard);
    }
}

// var playersCard = { suit: "diamond", value: "ace" };

// deckOfCards.drawRandom();
// deckOfCards.drawFromTop();
// deckOfCards.insertRandom(playersCard);

// console.log(deck);
var newDeck = new DeckOfCards();
console.log(newDeck.deck);
newDeck.initializeDeck();
console.log("initialized", newDeck);
newDeck.shuffle();
// newDeck.drawFromTop();
// newDeck.drawRandom();
// newDeck.insertOnBottom();
// newDeck.insertRandom();
console.log(newDeck);