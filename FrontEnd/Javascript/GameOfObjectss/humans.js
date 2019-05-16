function Warrior(name) {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(700, 900);
    this.minDamage = 60;
    this.maxDamage = 90;
    this.isAlive = true;
    this.name = name;

    this.specialConfig = new SpecialConfig("Brute Force Slam!", 1.5, 20);
}

Warrior.prototype = new Combatant();

function Wizard(name) {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(400, 650);
    this.minDamage = 85;
    this.maxDamage = 125;
    this.isAlive = true;
    this.name = name;

    this.specialConfig = new SpecialConfig("Stone Rain", 2, 10);
}

Wizard.prototype = new Combatant();

function Archer(name) {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(250, 450);
    this.minDamage = 100;
    this.maxDamage = 150;
    this.isAlive = true;
    this.name = name;

    this.specialConfig = new SpecialConfig("Fiery Arrow", 1.15, 75); //name, modifier, chance
}

Archer.prototype = new Combatant();

function Priest(name) {
    // a human class should have properties that relate only to him
    // and he is also a combatant
    this.health = getRandomNumber(250, 450);
    this.minDamage = 0;
    this.maxDamage = 1;
    this.isAlive = true;
    this.name = name;

    this.specialConfig = new SpecialConfig("Hand of God", 2, 80); //modificator (sansata da se sluci - 80)
}

Priest.prototype = new Combatant(); //nasleduva od combatant za da ucestvuva vo igrata