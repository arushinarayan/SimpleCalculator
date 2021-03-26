var inputlabel = document.getElementById('inputLabel')
function pushBtn(obj){
  var pushed=obj.innerHTML;
  if (pushed === '=') {
    // Calculate
    inputLabel.innerHTML = eval(inputLabel.innerHTML);
    } else if (pushed === 'C') {
    // Clear
    inputLabel.innerHTML = '0';
    } else {
    if (inputLabel.innerHTML == '0') {
    inputLabel.innerHTML = pushed;
    } else {
      if (pushed == '÷'){
        inputLabel.innerHTML += '/';
      } else if(pushed == 'x'){
        inputLabel.innerHTML += '*';
      } else {
    inputLabel.innerHTML += pushed; 
      }  
    }
    }
}
