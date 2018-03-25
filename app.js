

var inputs = [""];
var str;
var opsA = ["+", "-", "/", "*"];
var opsB = ["."];
var nums = [0,1,2,3,4,5,6,7,8,9];


function getValue(input){
    if(opsB.includes(inputs[inputs.length-1]===true && inputs===".")){

    }
    else if (inputs.length===1 && opsA.includes(input)===false) {
        inputs.push(input);
    }
    else if (opsA.includes(inputs[inputs.length-1])===false) {
      inputs.push(input);
    }
    else if (nums.includes(Number(input))) {
        inputs.push(input);
    }
    update();

}

function update(){
  str = inputs.join("");
  document.getElementById("display").innerHTML = str;
}

function equals(){
  if(inputs.length>1) { //if inputs array length is more than 1 element
    str = inputs.join("");
    document.getElementById("display").innerHTML = eval(str);
  }
}

document.getElementById('buttonsDiv').addEventListener('click', handler, false);

function handler(e){
  if(e.target !== e.currentTarget){ //if the value is not div element
      if(e.target.id === "clear"){
        inputs=[""];
        update();
      }
      else if (e.target.id === "back") {
        inputs.pop();
        update();
      }
      else if (e.target.id ==="=") {
          equals();
      }
    else {
      if(inputs[inputs.length-1].indexOf("+", "-", "/", "*", ".")===-1){
              getValue(e.target.id );
      }
      else{
              getValue(e.target.id );
      }
    }
  }
  e.stopPropagation();//stop event processing and going up on DOM
}
