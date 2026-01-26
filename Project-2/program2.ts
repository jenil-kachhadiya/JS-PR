// 1. Multiplication table
let num: number = 5;
let i: number = 1;
console.log('Multiplication table');
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}

// 2. Factorial
console.log('\n');
let n: number = 5;
let fact: number = 1;
while (n > 0) {
    fact *= n;
    n--;
}
console.log("Factorial =", fact);


// 3. Armstrong number list up to a given number
console.log('\n');
let limit: number = 500;
let num1: number = 1;

do {
    let temp = num1;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    if (sum === num1) {
        console.log(num1);
    }

    num1++;
} while (num1 <= limit);


// 4. Palindrome number
console.log('\n');
let limit3: number = 200;
let num3: number = 1;

while (num3 <= limit3) {
    let temp = num3;
    let rev = 0;

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
let terms: number = 10;
let a: number = 0, b: number = 1;
let i4: number = 1;

while (i4 <= terms) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    i4++;
}

// 6. All integers between 0 and 30 using
let j: number = 0;
let sum: number = 0;

do {
    sum += j;
    j++;
} while (j <= 30);
console.log("Total =", sum);


// 7. FizzBuzz
console.log('\n');
let p: number = 1;

do {
    if (p % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (p % 3 === 0) {
        console.log("Fizz");
    } else if (p % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    p++;
} while (p <= 100);


// 8. Display 1-2-3-4-5-6-7-8-9-10 using for loop
console.log('\n');
let output: string = "";

for (let k = 1; k <= 10; k++) {
    output += k;
    if (k < 10) {
        output += "-";
    }
}
console.log(output);


// 9. Display 1+4+9+16+...+100 = 385
console.log('\n');
let sum9: number = 0;
let result: string = "";

for (let i = 1; i <= 10; i++) {
    sum9 += i * i;
    result += i * i;
    if (i < 10) {
        result += "+";
    }
}
console.log(result + " = " + sum9);

// 11. Reverse Number Pattern
console.log('\n');
let y: number = 5;

for (let i = 1; i <= y; i++) {
    let line = "";
    for (let j = y; j >= y - i + 1; j--) {
        line += j + " ";
    }
    console.log(line.trim());
}

// 11. Continuous Number Triangle
console.log('\n');
let num11 = 1;

for (let i = 1; i <= 5; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += num11 + " ";
        num11++;
    } 
    console.log(line.trim());
}
