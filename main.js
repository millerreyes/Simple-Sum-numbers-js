function add(){
var num1 = parseInt(document.getElementById("number1").value); 
var num2= parseInt(document.getElementById("number2").value);
const sum = num1 + num2;
const min= num1 - num2;
document.getElementById("answer").value=sum;
document.getElementById("minus").value=min;
}