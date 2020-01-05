function card(name, suit, value){
    this.name = name;
    this.suit = suit;
    this.value = value;
}

var deck = [
    new card('Ace', 'Clubs', 11),
    new card('King', 'Clubs', 10),
    new card('Queen', 'Clubs', 10),
    new card('Jack', 'Clubs', 10),
    new card('Ten', 'Clubs', 10),
    new card('Nine', 'Clubs', 9),
    new card('Eight', 'Clubs', 8),
    new card('Seven', 'Clubs', 7),
    new card('Six', 'Clubs', 6),
    new card('Five', 'Clubs', 5),
    new card('Four', 'Clubs', 4),
    new card('Three', 'Clubs', 3),
    new card('Two', 'Clubs', 2),
    new card('Ace', 'Diamonds', 11),
    new card('King', 'Diamonds', 10),
    new card('Queen', 'Diamonds', 10),
    new card('Jack', 'Diamonds', 10),
    new card('Ten', 'Diamonds', 10),
    new card('Nine', 'Diamonds', 9),
    new card('Eight', 'Diamonds', 8),
    new card('Seven', 'Diamonds', 7),
    new card('Six', 'Diamonds', 6),
    new card('Five', 'Diamonds', 5),
    new card('Four', 'Diamonds', 4),
    new card('Three', 'Diamonds', 3),
    new card('Two', 'Diamonds', 2),
    new card('Ace', 'Hearts', 11),
    new card('King', 'Hearts', 10),
    new card('Queen', 'Hearts', 10),
    new card('Jack', 'Hearts', 10),
    new card('Ten', 'Hearts', 10),
    new card('Nine', 'Hearts', 9),
    new card('Eight', 'Hearts', 8),
    new card('Seven', 'Hearts', 7),
    new card('Six', 'Hearts', 6),
    new card('Five', 'Hearts', 5),
    new card('Four', 'Hearts', 4),
    new card('Three', 'Hearts', 3),
    new card('Two', 'Hearts', 2),
    new card('Ace', 'Spades', 11),
    new card('King', 'Spades', 10),
    new card('Queen', 'Spades', 10),
    new card('Jack', 'Spades', 10),
    new card('Ten', 'Spades', 10),
    new card('Nine', 'Spades', 9),
    new card('Eight', 'Spades', 8),
    new card('Seven', 'Spades', 7),
    new card('Six', 'Spades', 6),
    new card('Five', 'Spades', 5),
    new card('Four', 'Spades', 4),
    new card('Three', 'Spades', 3),
    new card('Two', 'Spades', 2)
];

/*Objects
1 properties - variables
2 methods - functions
A One-time-use objects
    var myCountry = {
        getCapital : function() {
        alert(this.myCapital);
        },
        myName : 'USA',
        myCapital : 'Washington DC'
        },
     Használat
     myCountry.getCapital();
     alert(myCountry.myName);
B Reusable object
    Constructor:
    function myPerson(a,b){
        this.name = a;
        this.age = b;
        }
    Használat
    var actor1 = new myPerson('Jack', 42);
    var actor1 = new myPerson('Mary', 33);
    alert(actor1.name);
    alert(actor2.age);
 */

//UML diagramms - write objects