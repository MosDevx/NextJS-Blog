"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sampleString = 'HelloWorld';
function reverseString(input) {
    var start = 0;
    var end = input.length - 1;
    var inputArray = input.split('');
    while (start <= end) {
        var temp = inputArray[start];
        inputArray[start] = inputArray[end];
        inputArray[end] = temp;
        start++;
        end--;
    }
    console.log(inputArray.join(''));
}
reverseString(sampleString);
