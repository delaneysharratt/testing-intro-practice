// TESTING PRACTICE

//CHALLENGE 110

function conditionals(numOne, numTwo) {
    if (numOne > numTwo) {
        return 'The first number was bigger!';
    } else if (numOne < numTwo) {
        return 'The second number was bigger!';
    } else if (numOne === numTwo) {
        return 'The numbers are the same!';
    }
}

//Conditionals — 110
console.log('For the values 1 and 2...', conditionals(1, 2));
console.log(`For the values '5' and 2...`, conditionals('5', 2));
console.log(`For the values 2 and '5'...`, conditionals(2, '5'));
console.log(`For the values 7 and '7'...`, conditionals(7, '7'));
console.log(`For the values 7...`, conditionals(7));
console.log(`For the values 'twenty' and 8...`, conditionals('twenty', 8));

//CHALLENGE 130

function concatenateValuesAfter(listWords, startingValue) {
    //return all values as a string from startingValue
    let newWordsString = '';
    for (i = startingValue; i < listWords.length; i++) {
        newWordsString += listWords[i];
    }
    return newWordsString;
}

//Loops Arrays and Concatenation — 130
console.log(`In the statement 'Polybius is not an urban legend', the words after the second word are:`,
    concatenateValuesAfter(['Polybius', 'is', 'not', 'an', 'urban', 'legend'], 1));
console.log(`In the statement 'It's raining cats and dogs', the words after the second word are:`,
    concatenateValuesAfter([`It's`, 'raining', 'cats', 'and', 'dogs'], 2));
console.log(`In the statement 'The heart weighs 7 pounds', the words after the third word are:`,
    concatenateValuesAfter(['The', 'heart', 'weighs', '7', 'pounds'], 3));
console.log(`In the statement 'The heart weighs 7 pounds', the words after the third word are:`,
    concatenateValuesAfter(['The', 'heart', 'weighs', '7', 'pounds'], 5));