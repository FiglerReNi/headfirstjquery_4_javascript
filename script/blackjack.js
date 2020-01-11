$(document).ready(function() {
//ez az alap objektum
    function card(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }

//ezzel számoljuk a pontokat
    var hand = {
        cards: new Array(),
        currentTotal: 0,
        sumCardTotal: function () {
            this.currentTotal = 0;
            for (var i = 0; i < this.cards.length; i++) {
                this.currentTotal = this.currentTotal + this.cards[i];
            }
            $('#hdrTotal').html('Total: ' + this.currentTotal);
            if (this.currentTotal > 21) {
                $('#btnStick').trigger('click');
                $("#result").css("display", "inline");
                $('#imgResult').attr('src', 'image/x.png');
                $('#hdrResult').html(('BUST!')).attr('class', 'lose');
            } else if (this.currentTotal <= 21 && this.cards.length == 5) {
                $('#btnStick').trigger('click');
                $("#result").css("display", "inline");
                $('#imgResult').attr('src', 'image/check.png');
                $("#hdrResult").html("WIN! - 5 card trick!").attr('class', 'win');
            } else if (this.currentTotal == 21) {
                $('#btnStick').trigger('click');
                $("#result").css("display", "inline");
                $('#imgResult').attr('src', 'image/check.png');
                $("#hdrResult").html("BlackJack!").attr('class', 'win');
            } else {
            }
        }
    };

//összes kártya, innen választunk randommal
    var deck = [
        new card('Ace', 'clubs', 11),
        new card('King', 'clubs', 10),
        new card('Queen', 'clubs', 10),
        new card('Jack', 'clubs', 10),
        new card('Ten', 'clubs', 10),
        new card('Nine', 'clubs', 9),
        new card('Eight', 'clubs', 8),
        new card('Seven', 'clubs', 7),
        new card('Six', 'clubs', 6),
        new card('Five', 'clubs', 5),
        new card('Four', 'clubs', 4),
        new card('Three', 'clubs', 3),
        new card('Two', 'clubs', 2),
        new card('Ace', 'diamonds', 11),
        new card('King', 'diamonds', 10),
        new card('Queen', 'diamonds', 10),
        new card('Jack', 'diamonds', 10),
        new card('Ten', 'diamonds', 10),
        new card('Nine', 'diamonds', 9),
        new card('Eight', 'diamonds', 8),
        new card('Seven', 'diamonds', 7),
        new card('Six', 'diamonds', 6),
        new card('Five', 'diamonds', 5),
        new card('Four', 'diamonds', 4),
        new card('Three', 'diamonds', 3),
        new card('Two', 'diamonds', 2),
        new card('Ace', 'hearts', 11),
        new card('King', 'hearts', 10),
        new card('Queen', 'hearts', 10),
        new card('Jack', 'hearts', 10),
        new card('Ten', 'hearts', 10),
        new card('Nine', 'hearts', 9),
        new card('Eight', 'hearts', 8),
        new card('Seven', 'hearts', 7),
        new card('Six', 'hearts', 6),
        new card('Five', 'hearts', 5),
        new card('Four', 'hearts', 4),
        new card('Three', 'hearts', 3),
        new card('Two', 'hearts', 2),
        new card('Ace', 'spades', 11),
        new card('King', 'spades', 10),
        new card('Queen', 'spades', 10),
        new card('Jack', 'spades', 10),
        new card('Ten', 'spades', 10),
        new card('Nine', 'spades', 9),
        new card('Eight', 'spades', 8),
        new card('Seven', 'spades', 7),
        new card('Six', 'spades', 6),
        new card('Five', 'spades', 5),
        new card('Four', 'spades', 4),
        new card('Three', 'spades', 3),
        new card('Two', 'spades', 2)
    ];

//gombnyomásra kér kártyát, a legelején
    $('#btnDeal').click(function () {
        //kártya
        deal();
        //kattintásra eltűnik a gomb
        $(this).hide();
        $("#btnHit").css("display", "inline");
        $("#btnStick").css("display", "inline");
        $("#btnRestart").css("display", "inline");
    });

//két kártya megjelenítése a gombnyomásra
    function deal() {
        for (var i = 0; i < 2; i++) {
            //tényleges húzás
            hit();
        }
    }

//további kártyakérés
    $('#btnHit').click(function () {
        hit();
    });

//játék vége
    $('#btnStick').click(function () {
        $("#result").css("display", "inline");
        $('#imgResult').attr('src', 'image/check.png');
        $('#hdrResult').html('Stick!').attr('class', 'win');
        $("#btnHit").hide();
        $(this).hide();
    });

//restart
    $('#btnRestart').click(function () {
        //újratöltés nélkül
        $('#btnDeal').show();
        $("#btnHit").css("display", "none");
        $("#btnStick").css("display", "none");
        $("#result").css("display", "none");
        $(this).css("display", "none");
        $('#myHand').empty();
        $('#hdrTotal').html('');
        $('#hdrResult').html('');
        usedCard.length = 0;
        hand.cards.length = 0;
        hand.currentTotal = 0;
        //oldal újratöltéssel
        //setTimeout(window.location.reload.bind(window.location), 5000);

    });

//kártya húzás
    function hit() {
        //húzott kártya
        var newCard = false;
        do {
            var index = getRandom();
            if ($.inArray(index, usedCard) == -1) {
                newCard = true;
                //belerakjuk a használt kártyák közé
                usedCard[usedCard.length] = index;
                //kártya
                var showCard = deck[index];
                //append
                //$('#myHand').append('<div class="currentHand"><img src="image/cards/' + showCard.suit + '/' + showCard.name +'.jpg" ></div>').fadeOut('slow').fadeIn('slow');
                //appendTo
                $('<div class="currentHand"><img src="image/cards/' + showCard.suit + '/' + showCard.name + '.jpg" ></div>').appendTo('#myHand').fadeOut('slow').fadeIn('slow');
                hand.cards[hand.cards.length] = showCard.value;
            }
        } while (!newCard);
        hand.sumCardTotal();
    }

//random
    function getRandom() {
        var number = Math.floor(Math.random() * 52)
        return number;
    }

//használt kártyák indexének a mentése
    var usedCard = [];
})
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