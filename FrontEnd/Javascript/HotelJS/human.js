function Human(index) {  //constructor (klasa)
    this.name = "Person-" + index;
    this.vacationDays = getRandomNumber(3, 7);
    this.money = 2000;

    this.pay = function (money) {
        this.money -= money; //koga ke plati ke mu se odzeme sumata 
    }

    this.calculateDays = function() {
        this.vacationDays--; //ke odzeme denovite od odmorot
    }
}
