// 1. Multiplication table
var num = 5;
var i = 1;
console.log('Multiplication table');
while (i <= 10) {
    console.log("".concat(num, " x ").concat(i, " = ").concat(num * i));
    i++;
}
// 2. Factorial
console.log('\n');
var n = 5;
var fact = 1;
while (n > 0) {
    fact *= n;
    n--;
}
console.log("Factorial =", fact);
// 3. Armstrong number list up to a given number
console.log('\n');
var limit = 500;
var num1 = 1;
do {
    var temp = num1;
    var sum_1 = 0;
    while (temp > 0) {
        var digit = temp % 10;
        sum_1 += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    if (sum_1 === num1) {
        console.log(num1);
    }
    num1++;
} while (num1 <= limit);
// 4. Palindrome number
console.log('\n');
var limit3 = 200;
var num3 = 1;
while (num3 <= limit3) {
    var temp = num3;
    var rev = 0;
    while (temp > 0) {
        rev = rev * 10 + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    if (rev === num3) {
        console.log(num3);
    }
    num3++;
}
// 5. Fibonacci series
console.log('\n');
var terms = 10;
var a = 0, b = 1;
var i4 = 1;
while (i4 <= terms) {
    console.log(a);
    var next = a + b;
    a = b;
    b = next;
    i4++;
}
// 6. All integers between 0 and 30 using
var j = 0;
var sum = 0;
do {
    sum += j;
    j++;
} while (j <= 30);
console.log("Total =", sum);
// 7. FizzBuzz
console.log('\n');
var p = 1;
do {
    if (p % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (p % 3 === 0) {
        console.log("Fizz");
    }
    else if (p % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
    p++;
} while (p <= 100);
// 8. Display 1-2-3-4-5-6-7-8-9-10 using for loop
console.log('\n');
var output = "";
for (var k = 1; k <= 10; k++) {
    output += k;
    if (k < 10) {
        output += "-";
    }
}
console.log(output);
// 9. Display 1+4+9+16+...+100 = 385
console.log('\n');
var sum9 = 0;
var result = "";
for (var i_1 = 1; i_1 <= 10; i_1++) {
    sum9 += i_1 * i_1;
    result += i_1 * i_1;
    if (i_1 < 10) {
        result += "+";
    }
}
console.log(result + " = " + sum9);
// 11. Reverse Number Pattern
console.log('\n');
var y = 5;
for (var i_2 = 1; i_2 <= y; i_2++) {
    var line = "";
    for (var j_1 = y; j_1 >= y - i_2 + 1; j_1--) {
        line += j_1 + " ";
    }
    console.log(line.trim());
}
// 11. Continuous Number Triangle
console.log('\n');
var num11 = 1;
for (var i_3 = 1; i_3 <= 5; i_3++) {
    var line = "";
    for (var j_2 = 1; j_2 <= i_3; j_2++) {
        line += num11 + " ";
        num11++;
    }
    console.log(line.trim());
}
