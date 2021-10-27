/*
for(let number = "#"; number.length < 8; number = number + "#"){
    console.log(number);
}
*/
for(let number = 1; number < 101; number++){
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
}
