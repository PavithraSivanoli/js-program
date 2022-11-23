var number = prompt("Enter a positive integer");
var  numberOfDigits = number.length;
var sum = 0;
var  temp = number;

while (temp > 0) {

    var remainder = temp % 10;

    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10); 
}

if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
