function card(name, suit, value){
    this.name = name;
    this.suit = suit;
    this.value = value;
}

var card = [];



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