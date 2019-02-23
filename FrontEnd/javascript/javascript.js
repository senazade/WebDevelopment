alert("yes, this is javascript")

var initialValueInFeet=34;

var coverterNumber=0.3048;

var result = initialValueInFeet*coverterNumber;

result
10.3632

var classes = 3;

var sessions=12;

var months=6;

var result=(classes * sessions ) * months - (sessions / 2) * classes


function tenValues(){
    var max=0;
    var i=0;
    while(i<10){
        var random=Math.random ();
        console.log("current number is " , random);
        if(random>max){
            max=random;
        }
        i++;
    }
    console.log("biggest number is" , max);
}
  tenValues();


  function sumOfSquares (){
      var x = 101;
      var sum = 0;
      while (x <= 150){
          sum = sum + Math.pow(x,2);
          x++;
      }

      console.log(sum) ;
  }

  sumOfSquares();

//https://www.geeksforgeeks.org/javascript-math-pow-function/


