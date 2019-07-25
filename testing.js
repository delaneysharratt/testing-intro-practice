// TESTING PRACTICE

//CHALLENGE 110

function concatenateValuesAfter(listWords, startingValue) {
    //return all values as a string from startingValue
    let newWordsString = '';
    for (i = startingValue; i < listWords.length; i++) {
        newWordsString += listWords[i];
    }
    return newWordsString;
}

//Conditionals — 110
console.log('For the values 1 and 2...', conditionals(1, 2));

//CHALLENGE 130

function conditionals(numOne, numTwo) {
    if (numOne > numTwo) {
        return 'The first number was bigger!';
    } else if (numOne < numTwo) {
        return 'The second number was bigger!';
    } else if (numOne === numTwo) {
        return 'The numbers are the same!';
    }
}

//Loops Arrays and Concatenation — 130
console.log('The last 4 words in the array should be: not an urban legend',
    concatenateValuesAfter(['Polybius', 'is', 'not', 'an', 'urban', 'legend'], 4));