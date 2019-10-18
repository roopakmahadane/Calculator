const button = document.querySelectorAll('.button');
const textArea = document.querySelector('.text');
const clear = document.querySelector('.clear');
const equal= document.querySelector('.equal');
const backspace = document.querySelector('.backspace');
const percentage = document.querySelector('.percentage');

function insert(e){
  var num = e.currentTarget.value;
  if(num == 'x'){
    num = '*';
  }
  if(textArea.value == 0 && num > 0 && textArea.value !== '0.'){
    textArea.value = num;
  }else{
 textArea.value = textArea.value + num;

  }
};

function clearAll(){
  textArea.value = 0;
}

function equalTo(){
  var val = textArea.value;
  if(val){
    textArea.value = eval(val);
  }
}
function backSpace(){
  var val = textArea.value;
  textArea.value = textArea.value.substring(0, val.length-1);
}

function percentCalculate(){
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






