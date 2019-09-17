window.getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.calculatePercent = function(percent) {
    return (100 - percent) <= getRandomNumber(0, 100);

}


//zadaca:
// clean the rooms so new customers can arrive
// hire new employers every 3 days
// calculate the total profit of the hotel, using the bills from rooms
// at the end of the 10 days count all the customer who visit the hotel and all employers