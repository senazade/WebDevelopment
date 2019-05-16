function War() {
    this.army = [];
    this.boss = new Dragon("Drogon");

    this.isRaging = function() {
        var aliveCombatants = 0;
        for (var index = 0; index < this.army.length; index++) { //eden po eden proveruvame
            var combatant = this.army[index];
            if (combatant.isAlive && !(combatant instanceof Priest)) { //ako e ziv i ako ne e priest za da ne go broi megju zivite
                aliveCombatants++;
            }
        }
        if (aliveCombatants > 0 && this.boss.isAlive) { //povekje od 0 ako se zivi moze da se tepaat
            this.processTurn(); //ke se izvrsi samo ako dvete strani se zivi
        } else {
            if (!this.boss.isAlive) {
                console.log("The peasants have defeated the mighty dragon!");
            } else if (aliveCombatants === 0) { //ako ne proveruvame koja strana pobedil i go printame
                console.log(this.boss.name + " has slain all the filthy peasants");
            } else {
                console.log("The battle ended in a tie......weird!");
            }
               // this method should execute everything that happens during one day of battle
            return true;
        }
    }

    this.processTurn = function() { //da se istepaat (dragonot prv udira)
        var victimIndex = getRandomNumber(0, 9); //bara zrtva
        var victim = this.army[victimIndex]; //vo this army
        if (victim.isAlive && !(victim instanceof Priest)) { //da ne go broi priestot megju zrtvite sto dragonot moze da napadne
            this.boss.attack(victim);
        } else {
            return this.processTurn(); //pak izbira target
        }
        
        for (var index = 0; index < this.army.length; index++) {
            var combatant = this.army[index];
            if (combatant.isAlive) {
                combatant.attack(this.boss, this.army);
            }
        }
        
    }

    // this method should generate an army of 10 people alternating randomly between 
    // 3 classes, Warrior, Wizard and Archer
    this.generateArmy = function() {
        for (var index = 0; index < 10; index++) {
            var type = getRandomNumber(1, 3);
            switch (type) {
                case 1:
                    this.army.push(new Warrior("Warrior-" + index));
                    break;
                case 2:
                    this.army.push(new Wizard("Wizard-" + index));
                    break;
                default:
                    this.army.push(new Archer("Archer-" + index));
                    break;
            }
        }
        var papata = new Priest("Holy man");
        this.army.push(papata);
    }
    this.generateArmy();
}