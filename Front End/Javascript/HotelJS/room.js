function Room(number) {
    this.roomNumber = "Room number " + number;
    this.isTaken = false; 
    this.isDirty = false;
    this.customer = null;
    this.minibar = 200;
    this.cost = 60;
    this.spentDays = 0;
    this.bill = 0;

//sobata treba da ima metodi sto ke gi imenuva svojstvata na sobata

    this.fillVacation = function(customer) { //da se popolni sobata
        this.isTaken = true;
        this.customer = customer;
    }

    this.leaveRoom = function() { 
        if (this.customer.vacationDays === 0) { //ako mu se potrosile denovite za odmor treba da ja napusti sobata
            this.isDirty = true;
            this.bill += (this.spentDays * this.cost); //zgolemena za ()
            this.customer.pay (this.bill);
            this.isTaken = false;
            this.customer = null;
        }

    }

    this.spendDay = function() { //raboten den
        if (this.customer) { //ako postoi musterija
            this.spentDays++; 
            this.customer.calculateDays();
            this.minibar -=20;
            this.bill += 20;
            this.leaveRoom();
        }
    }

    // this.cleanRoom = function() {
    //     if (room.leaveRoom) { //ili (room.leaveRoom) (this.isDirty && !this.isTaken) 
    //       this.isDirty = false; } }
        
    

    this.getCleaned = function() {  //od koga ke se iscisti
        this.isDirty = false;
        this.minibar = 200;
        return this.bill; //da se zeme smetkata 
    }

    this.Profit = function () {
        
    }
}