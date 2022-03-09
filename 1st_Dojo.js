// ## 1st Exercise
// Create a code that will show all numbers from 1 till 100.
// When a number is divisible by 3, you will show the word FIZZ instead of the number
// When a number is divisible by 5, you will show the word BUZZ instead of the number
// When a number is divisible by 3 and by 5, you will show the word FIZZBUZZ instead of the number
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log(`FizzBuzz`);
    }
    else if (i % 3 === 0) {
        console.log(`Fizz`);
    } else if (i % 5 === 0) {
        console.log(`Buzz`)
    }
    console.log(i);
};

## 2nd Exercise
Given this array of numbers:

//```javascript
//let myArray = [22, 34, 56, 12, 2, 34, 87]
//```

Find and show in the terminal the smallest one. Do not use any array method.

//let myArray = [22, 34, 56, 12, 2, 34, 87];

//console.log(myArray[4]);

let smallest = 100;

let myArray = [22, 34, 56, 12, 2, 34, 87];
    for (let i = 0; i < myArray.length; i++) {
        let current = myArray[i];
        if (current < smallest) {
            smallest = current
        }
}
 console.log(smallest);