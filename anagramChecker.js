"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputString = 'anna';
var anagramString = 'nnna';
var anagramChecker = function (input, anagram) {
    var frequencyMap = new Map();
    if (input.length !== anagram.length) {
        return false;
    }
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        }
        else {
            frequencyMap.set(char, 1);
        }
    }
    console.log(frequencyMap.size);
    for (var i = 0; i < anagram.length; i++) {
        var char = anagram[i];
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) - 1);
            if (frequencyMap.get(char) == 0) {
                frequencyMap.delete(char);
            }
        }
    }
    console.log(frequencyMap);
    return frequencyMap.size == 0;
};
console.log(anagramChecker(inputString, anagramString));
