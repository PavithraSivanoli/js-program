var num1 = parseInt(prompt("Enter first number: "));
  var result;

    if (num1 >= 0) {
        result = true;
    } else if (num1 < 0) {
        result = false;
    }
    alert(result);