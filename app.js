var  clear = document.getElementById('clear');
var  back = document.getElementById('back');
var  divide = document.getElementById('divide');
var  multiple = document.getElementById('multiple');
var  minus = document.getElementById('minus');
var  plus = document.getElementById('plus');
var  dot = document.getElementById('dot');
var  percent = document.getElementById('percent');
var  equal = document.getElementById('equal');
var  one = document.getElementById('one');
var  two = document.getElementById('two');
var  three = document.getElementById('three');
var  four = document.getElementById('four');
var  five = document.getElementById('five');
var  six = document.getElementById('six');
var  seven = document.getElementById('seven');
var  eight = document.getElementById('eight');
var  nine = document.getElementById('nine');
var  zero = document.getElementById('zero');
var  doubleZero = document.getElementById('doubleZero');

var  buttonsDiv = document.getElementById('buttonsDiv');
var  display = document.getElementById('display');
var arr = [];
var result;

buttonsDiv.addEventListener("click", doCalc, false);
function doCalc(e){
   console.log(e.target.innerText);
   console.log(e.currentTarget);
    if(e.currentTarget.value === e.target.value){
      //do nothing
    }
     else if(e.target.innerText === "=") {
       display.innerText = eval(display.innerText);
     }
     else if (e.target.innerText === "C") {
       display.innerText = '';
     }
     else if (e.target.innerText === "%") {
       display.innerText = doPercentageCalc(display.innerText);
     }
     else {
       display.innerText += e.target.innerText;
     }



   e.stopPropagation();
}



// function doLogic(x){
//   if(x.includes("+")) {
//     arr = x.split("+",2);
//     result = parseInt(arr[0]) + (parseInt(arr[2]));
//   }
//
//   return result;
// }






function doPercentageCalc(x){
  if (x.includes("+")) {
    arr = x.split("+",2);
    console.log("#49 " + arr[0] + " + " + arr[1]);
    result = parseInt(arr[0]) + (parseInt(arr[1]) * parseInt(arr[0]) /100);
  }
  else if (x.includes("-")) {
    arr = x.split("-",2);
    console.log("#49 " + arr[0] + " - " + arr[1]);
    result = parseInt(arr[0]) - (parseInt(arr[1]) * parseInt(arr[0]) /100);
  }
  else if (x.includes("*")) {
    arr = x.split("*",2);
    console.log("#49 " + arr[0] + " * " + arr[1]);
    result = parseInt(arr[1]) * parseInt(arr[0]) /100;
  }
  else {
    //error
  }
  return result;
}
