"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input = [4, 2, 2, 7, 8, 1, 2, 8, 10];
var findSmallestSubArray = function (input, targetSum) {
    var smallestArraySize = Number.MAX_VALUE;
    var startPos = 0;
    var currSum = 0;
    for (var i = 0; i < input.length; i++) {
        console.log("Value of i", i);
        currSum += input[i];
        while (currSum >= targetSum) {
            smallestArraySize = Math.min(currSum, i - startPos + 1);
            if (smallestArraySize == 1) {
                console.log(smallestArraySize);
                return;
            }
            currSum -= input[startPos];
            startPos++;
        }
    }
    console.log(smallestArraySize);
};
findSmallestSubArray(input, 9);
