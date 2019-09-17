function Combatant() {
    // a combatant is a being that can fight
    // place combat related methods here
    this.attack = function(target, army) {
        var damage = getRandomNumber(this.minDamage, this.maxDamage); //pri napad presmetuvame osnoven damage
        if (this instanceof Priest) { // ako se raboti za priest
            this.healArmy(army, this.specialConfig);
        } else {//ako ne se raboti za priest
            this.executeSpecial(damage, this.specialConfig); //osvnovniot damage se zgolemuva za specialot na taa klasa (za sekoj razlicno)
            target.recieveDamage(damage); //go napagjame targetot
        }  
    }
    this.recieveDamage = function(damage) {
        this.health -= damage;
        this.checkHealth();
    }

    this.executeSpecial = function(damage, specialConfig) {
        if (calculatePercent(specialConfig.chance)) { //ako ne se ostvari sansa za specialot 
            console.log(this.name + " hit the target with " + specialConfig.name + " for " + damage + " damage");
            return damage *= specialConfig.modifier;  //ako se izvrsi taa sansa se izvrsuva specijalniot napad i damagot se zgolemuva za modificatorot
        } else {
            return damage; //se vrakja osnovniot damage so sme go vovele kako parametar
        }
    }

    this.healArmy = function(army, specialConfig) {
        var healing = this.executeSpecial(250, specialConfig); //nadvor od for ciklus za da ne presmetuvame za sekoj vojnik za priest samo ednas da presmeti sansa
        //kolku healing treba da napravi? pocni so 250 pa postoi sansa da bide duplo
        for (var index = 0; index < army.length; index++) { //listaj niz cela armija 
            army[index].health += healing; //i zgolemi go healthot na sekoj vojnik onolku healing kolku sto treba
        }
    }
}

Combatant.prototype = new Being();

function SpecialConfig(name, modifier, chance) {
    this.name = name;
    this.modifier = modifier;
    this.chance = chance;
}