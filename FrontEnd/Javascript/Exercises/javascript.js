// var a = 5;
// alert("This is a greeting from javascript!!");

// var result = calculatePrice("vladimir", a);
// var result2 = calculatePrice(650, 60);

// alert(result);
// alert(result2);

// function calculatePrice(price, quantity) {
//     var result = price * quantity;
//     return result;
// }


// function convertTemperature(temperature, type) {
//     var result = 0;

//     if (type === "celsius") {
//         result = temperature * 1.8 + 32;
//     } else if (type == "fahrenheit") {
//         result = (5/9) * (temperature - 32);
//     } 
    
//     return result;
// }

// var fahr = convertTemperature(38, "celsius");
// var cels = convertTemperature(88, "fahrenheit");
// var sameNum = convertTemperature(300);

// function calculateTotalPrice(itemPrice) {
//     return itemPrice * 1.05 * 1.18;
// }

// var priceOfTrotinetFromSolun = calculateTotalPrice(420);

// var userInput = prompt("Enter a number");


// function sayHi() {
//     var i = 0;
//     while (i <= 20) {
//         console.log("Hai there");
//         i++;
//         if (i === 10) {
//             return;
//         }
//     }

//     console.log("Function has ended");
// }

// sayHi();

// var initialValueInFeet=34;

// var coverterNumber=0.3048;

// var result = initialValueInFeet*coverterNumber;

// result
// 10.3632

// var classes = 3;

// var sessions=12;

// var months=6;

// var result=(classes * sessions ) * months - (sessions / 2) * classes

// function getBiggest() {
//     var biggest = 0;
//     var i = 0;
//     while (i < 10) {
//         var randomNum = Math.random();
//         console.log("current number is ", randomNum);
//         if (randomNum > biggest) {
//             biggest = randomNum;
//         }
//         i++;
//     }
//     console.log("biggest number is ", biggest);
// }

// getBiggest();


// function tenValues(){
//     var max=0;
//     var i=0;
//     while(i < 10){
        
//         var random=Math.random ();
//         console.log("current number is " , random);
//         if(random > max){
//             max = random;
//         }
//         i++;
//     }
//     console.log("biggest number is" , max);
// }
//   tenValues();


//   function sumOfSquares (){
//       var x = 101;
//       var sum = 0;
//       while (x <= 150){
//           sum = sum + Math.pow(x,2);
//           x++;
//       }

//       console.log(sum) ;
//   }

//   sumOfSquares();


// function taxCalc () {
//     var salary=0;
//     var tax=0;
//     if (salary<=1000){
//         document.write ("your tax rate is 11%");

//     } else {
//         document.write ("your tax rate is 18%");

//     }
// }
     
// function sumOfSquares() {
//     var i = 101;
//     var suma = 0;
//     while(i <= 150) {
//         var squared = Math.pow(i, 2);
//         console.log("the current iteration is ", squared);
//         suma += squared;
//         i++;
//     }
//     console.log("the result is ", suma);
// }

// sumOfSquares();

// function sumOfNumbers(number) {
//     var suma = 0;

//     while(number) {
//         var cifra = number % 10;
//         suma += cifra;
//         number = Math.floor(number / 10);
//     }

//     console.log("the sum is ", suma);
// }

// sumOfNumbers(3453);

// function evenOdd() {
//     for (var index = 0; index <= 15; index++) {
//         if (index % 2 === 0) {
//             console.log ("the number " + i + " is even");
//         } else {
//             console.log ("the number " + i + " is odd"); 
//         }
//     }
// }
// evenOdd();

// function fizz() {
//     for (var index = 1; index <= 100; index++) {
//         if (index % 5 === 0 && index % 3 === 0) {
//             console.log ("FizzBuzz");
//         } else if (index % 5 === 0) {
//             console.log ("Buzz");
//         } else if (index % 3 === 0) {
//             console.log ("Fizz");
//         } else {
//             console.log ("this is a regular number"); //optional
//         }
//     }
// }
// fizz();

// function armstrong() {
//     for (var index = 100; index < 1000; index++) {
//         var result = sumOfCubes(index);

//         if (result === index) {
//             console.log(index + " is an armstrong number");
//         }
//     }
// }

// function sumOfCubes(number) {
//     var suma = 0;

//     while(number) {
//         var cifra = number % 10;
//         suma += Math.pow(cifra, 3);
//         number = Math.floor(number / 10);
//     }

//     return suma;
// }

// armstrong();

// function sumOfMultiples(min, max) {
//     var suma = 0;
//     for (var index = min; index < max; index++) {
//         if (index % 5 === 0 && index % 3 === 0) {
//             suma += index;
//         }
//     }

//     console.log("The sum is " + suma);
// }

// sumOfMultiples(234, 34345436);

// function sumOfRange(min, max) {
//     var suma = 0;
//     for (var index = min; index < max; index++) {
//         suma += index; 
//     }

//     console.log("The sum is " + suma.toString());
// }


// function totallyDifferent(n, x) { // 'n' e incrementiran se dodeka ne najde different broj 
//     while (true) {
//         n++;
//         var diffNumbers = areDifferent(n, x);
//         if (diffNumbers) {
//             console.log("the numbers are totally different ", n, x);
//             return;
//         }
//     }
// }

// function areDifferent(num1, num2) {
//     while(num1) { //se dodeka postoi broj 1
//         var secondary = num2;
//         var firstDigit = num1 % 10;
//         while (secondary) {
//             var secondDigit = secondary % 10;
//             if (firstDigit === secondDigit) {
//                 return false;
//             }
//             secondary = Math.floor(secondary / 10);
//         }
//         num1 = Math.floor(num1 / 10); //result is 0 therefore false
//     }

//     return true; //if it is not found its true
// }


// function feedtheCats(){}

// var cats = ["tabby","lizzie","mary"];
// var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

//     for ( var i=0; i < days.length, i++;) {
//         var currentDay = days[i];
//         for (var index=0; index < cats.length; index++;) {
//             var cat = cats[index];
//             if (cat ==="Tabby") {
//                 console.log (cat + "ate fish" + currentDay);
//             } else if (cat ==="Lizzie"){
//                 console.log (cat + "ate chicken" + currentDay);
//             } else {
//                 console.log(cat + "ate whatever" + currentDay);
//             }
//         }
        
//     }

// feedtheCats()

// function performCPR() {
//     var time = 60;

//     for (var index = 0; index < time; index++) {
//         if (index % 15 === 0) {
//             console.log("check the pulse");
//         } else {
//             console.log("performing CPR...");
//         }

//         if (index === time - 1) {
//             console.log("the patient died :(");
//         }
//     }
// }

// performCPR();


// function isPalindrome(number) {
//     while(number) { //while number is true
//         var digit = number % 10;       
//         number = Math.floor(number/ 10);
//     }
// }

// isPalindrome(45225);

// function flirting (flirt, hitpoints) {
//     var hitpoints = 100;
//     for (i=0, i < flirt, i++;) {
//         if (i % 3 === 0); // zero means true or false

//         if (i % 5 === 0);

//         if (i % 10 === 0);
        
//     }
// }

// window.getRandomNumber = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// window.calculatePercent = function(percent) {
//     return (100 - percent) <= getRandomNumber(0, 100);
// }

// function war() {
//     var orc = new Combatant("Zugzug", 560, 16, 32, 5, "orc");
//     var human = new Combatant("Dzordz", 420, 22, 27, 9, "human");

//     while (orc.health > 0 && human.health > 0) {
//         orc.attack(human);
//         human.attack(orc);
//     }

//     if (orc.health <= 0) {
//         console.log(human.name + " has won the battle");
//     } else if (human.health <= 0) {
//         console.log(orc.name + " has won the battle");
//     } else {
//         console.log("The battle ended with a tie");
//     }

// }

// function Combatant(name, health, min, max, armor, type) {
//     this.name = name;
//     this.health = health;
//     this.minDamage = min;
//     this.maxDamage = max;
//     this.armor = armor;
//     this.type = type;
//     this.evasion = 10;

//     this.attack = function(target) {
//         var damage = getRandomNumber(this.minDamage, this.maxDamage);
//         if (this.type === "orc" && calculatePercent(20)) {
//             damage *= 1.5;
//             console.log(this.name + " scored a critical hit for " + damage);
//         }
//         target.recieveDamage(damage);
//     }
//     this.recieveDamage = function(dmg) {
//         var chance = calculatePercent(100 - this.evasion);
//         var armor = this.armor;
//         if (this.type === "human" && calculatePercent(30)) {
//             armor *= 1.3;
//             console.log(this.name + " has blocked an attack with armor " + armor);
//         }
//         if (chance) {
//             this.health = this.health + armor - dmg;
//         } else {
//             console.log(this.name + " has evaded the attack");
//         }
        
//     }
// }

// war();

         //event 
        // function mouseOverFunc() {
           
        //         for (var index = 0; index < 2; index++) {
        //             generateItems();
        //         }
        // }
        
        // function generateItems () {
        //     var kocka = document.createElement("div");

        //     kocka.style.height= "100px";
        //     kocka.style.width= "100px";
        //     kocka.style.backgroundColor= "red";

        //     document.body.appendChild(kocka);
        //     kocka.addEventListener ("mouseover", function() {
        //     mouseOverFunc();
        //     } )
        // }
        // generateItems();

        // function resize() {
        //     window.addEventListener("resize", function(event) {
        //         document.body.innerHTML = "";
        //         var text = "The width is " + event.target.innerWidth + 
        //         " and the height is " + event.target.innerHeight + " of the window";
        //         var p = document.createElement("p");
        //         p.innerHTML = text;
        //         document.body.appendChild(p);
        //     })
        // }
        
        // resize();

        // var mnozenje = function(broj1, broj2) {
        //     return broj1 * broj2;
        // }
        
        // var sobiranje = function(broj1, broj2) {
        //     return broj1 + broj2;
        // }
        
        // var odzemanje = function(broj1, broj2) {
        //     return broj1 - broj2;
        // }
        
        // // var delenje = function(broj1, broj2) {
        // //     return broj1 / broj2;
        // // }
        
        // function reportThenMultiply(num1, num2, callback) {
        //     console.log("we are about to multiply " + num1 + " and " + num2 + " today");
        //     return callback(num1, num2);
        // }
        
        // var rezultat1 = reportThenMultiply(34, 56, mnozenje);
        // var rezultat2 = reportThenMultiply(32344, 56576, sobiranje);
        // var rezultat3 = reportThenMultiply(32344, 56786, function(broj1, broj2) {
        //     console.log("haha im not doing anything with these numbers")
        // });
        
        // function mouseoverFunc(event) {
        //     for (var index = 0; index < 2; index++) {
        //         generateSquare();
        //     }
        //     event.target.removeEventListener("mouseover", mouseoverFunc, false);
        // }
        
        // function generateSquare() {
        //     var el = document.createElement("div");
        
        //     el.style.height = "100px";
        //     el.style.width = "100px";
        //     el.style.marginBottom = "10px";
        //     el.style.marginRight = "10px";
        //     el.style.backgroundColor = "maroon";
        //     document.body.appendChild(el);
        //     el.addEventListener("mouseover", mouseoverFunc);
        
        //     el.addEventListener("click", function(event) {
        //         event.target.parentNode.removeChild(event.target);
        //     });
        
        // }
        // document.body.style.display = "flex";
        // generateSquare();
        
        
        
        // window.addEventListener("load", function(event) {
            
        //     alert("ne ti davam beee");
        // })
        
        // function makeParagraph(){
        //     var para = document.createElement("p");
        //     para.innerHTML = "This is a sample text";
        //     para.id = "hai";
        //     document.body.appendChild(para);
        
        //     var baton = document.createElement("button");
        //     baton.innerHTML = "Click me plox";
        //     document.body.appendChild(baton);
        
        //     baton.addEventListener("click", function(event) {
        //         var paragraph = document.getElementById("hai");
        //         paragraph.style.fontSize = "48px";
        //         paragraph.style.color = "orange";
        //     })
        // }
        // makeParagraph();


        // function FormDetails () {

        //     var formy = document.createElement("form")
        //     document.body.appendChild(formy);
            
        //     var firstName = document.createElement("input")
        //     formy.appendChild(firstName);
        //     firstName.placeholder = "firstName";

        //     var LastName = document.createElement("input")
        //     formy.appendChild(LastName);
        //     LastName.placeholder = "LastName";

        //     var Email = document.createElement("input")
        //     formy.appendChild(Email);
        //     Email.placeholder = "Email";

        //     var Password = document.createElement("input")
        //     formy.appendChild(Password);
        //     Password.placeholder = "Password";

        //     var button = document.createElement("button")
        //     button.innerHTML = "submit";
        //     formy.appendChild(button);
            
        // }

        // FormDetails ();


        


        

      
        
    
