const button = document.querySelectorAll('.button');
const textArea = document.querySelector('.text');
const clear = document.querySelector('.clear');
const equal= document.querySelector('.equal');
const backspace = document.querySelector('.backspace');
const percentage = document.querySelector('.percentage');
const ans = document.querySelector(".answer");

//Inserts value inside input field
const insert = (e) => {
  var num = e.currentTarget.value;
 textArea.value == 0 && num > 0 && !textArea.value.includes('0.') ? textArea.value = num : textArea.value = textArea.value + num;
 if(textArea.value.length*60 > window.screen.width){
    textArea.style.fontSize = '5vh';
 }
  if(textArea.value.length*30 > window.screen.width){
    textArea.style.fontSize = '3vh';
 }

};

//displays answer
const answerField = () => {
  try{
    if(textArea.value == '0' || textArea.value == ''){
      // if text are is empty display 0
         ans.innerHTML="";
         textArea.value = '0';
    }else{
         var answer = eval(textArea.value.replace(/x/g, '*'));
         ans.innerHTML = answer;
    }
  }
 catch(e){
    return
 }
}


const clearAll = () => {
  // To clear text area and display 0
  textArea.value = 0;
}

// when equal sign is clicked
const equalTo = () => {
  var val = textArea.value;
  if(val){
    textArea.value = eval(val.replace(/x/g, '*'));
  }
}

// to backspace one place
const backSpace = () => {
  var val = textArea.value;
  textArea.value = textArea.value.substring(0, val.length-1);
}

//to calculate percentage
const percentCalculate = () => {
    var val = textArea.value;
    if(val){
       textArea.value = eval(val)/100;
    }
}

button.forEach((btn) => btn.addEventListener('click', insert));
clear.addEventListener('click', clearAll);
equal.addEventListener('click', equalTo);
backspace.addEventListener('click', backSpace);
percentage.addEventListener('click', percentCalculate);
button.forEach((btn) => btn.addEventListener('click', answerField));








