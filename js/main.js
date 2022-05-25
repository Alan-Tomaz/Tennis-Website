function Calculate() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var result = num1 + num2;
  if (num1 === num2)
  {
  var triple = result + result + result;
  document.getElementById("p1").innerHTML = `The triple of the sum is ${triple}`;
  }
  else {
    document.getElementById("p1").innerHTML = `The result of the sum is ${result}`;
  }
  
}
