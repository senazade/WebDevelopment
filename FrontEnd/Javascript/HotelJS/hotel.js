function Hotel(name) {
    this.name = name;
    this.rooms = [];
    this.employees = [];

    this.work = function() {
        for (var index = 0; index < this.rooms.length; index++) {
            var room = this.rooms[index];
            room.spendDay();
        }
    }

    this.admit = function (customer) { // ke najdeme prva slobodna soba i ke go piknime customerot
        for (var index = 0; index < this.rooms.length; index++) {
            var room = this.rooms[index];
            if (!room.isDirty && !room.isTaken) {
                room.fillVacation(customer); //ke primi musterija
                return;
            }
        }
    }

    this.generateEmployees = function() {
        for (var index = 1; index <= 10; index++) {
            var employee = new Human(index);
            this.employees.push(employee);
        }
    }
    
    this.generateRooms = function() {
        for (var index = 1; index <= 100; index++) { //100 sobi
            var room = new Room(index); //kreirame nova soba 
            this.rooms.push(room); //i ja dodavame na sobite vo hotelot
        }
    }
    this.generateRooms();
    this.generateEmployees();

    
}