'use strict';
// TASK!!

// Напишіть функцію min(a, b), яка повертає менше чисел a і b.


// Приклад викликів:

// min(2, 5) == 2

// min(3, -1) == -1

// min(1, 1) == 1

function min(a, b) {
    let minimalNumber = a;

    if (a > b) {
        minimalNumber = b;
    }

    return minimalNumber;
};