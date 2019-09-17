var hotel = new Hotel("Hilton");

for (var i = 0; i < 30; i++) {
    var newCustomers = getRandomNumber(2, 5);
    for (var index = 0; index < newCustomers; index++) { // sekoj den vo zavisnost od kolku customers ima ke gi izvrtime site customers
        var customer = new Human(index); //ke bide sozdaden nov customer
        hotel.admit(customer); //hotelot vednas ke go primi
    }
    hotel.work();
}

console.log("The hotel finished working ", hotel);