const button = document.querySelectorAll('.button');
const textArea = document.querySelector('.text');
const clear = document.querySelector('.clear');
const equal= document.querySelector('.equal');

function insert(e){
  const num = e.target.value;
  if(textArea.value == 0){
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

button.forEach((btn) => btn.addEventListener('click', insert));
clear.addEventListener('click', clearAll);
equal.addEventListener('click', equalTo);
