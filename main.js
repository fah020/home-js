var num1 = prompt("Birinchi soni kiriting")
if (isNaN(num1)) {
    var num1 = prompt("Birinchi sonni kiriting") 
}

var num2 = prompt("Ikinchi soni kiriting")
if (isNaN(num2)) {
    var num2 = prompt("Ikinchi son kiriting")
}

var num3 = prompt("Uchinchi soni kiriting")
if (isNaN(num3)) {
    var num3 = prompt("Ikinchi son kiriting")
}

if (num1<=num2 && userNum1>=num3 || num1>=num2 && num1<=num3){
    alert(num1)
}
else if (num1<=num2 && num3>=num2 || num1>=num2 && num3<=num2) {
    alert(num2)
}
else if (num3>=num2 && num2<=num1 || num3<=num2 && num3>=num1){
    alert(num3)
}