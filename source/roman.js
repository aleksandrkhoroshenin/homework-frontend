'use strict';

const NOT_VALID_NUMBER = 'Not valid number', ERROR = 'error';
const romanMap = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

const decToRoman = dec => {
    let roman = '';
    if (dec <= 0)
        return NOT_VALID_NUMBER;
    for (let i in romanMap ) {
        while ( dec >= romanMap[i] ) {
            roman += i;
            dec -= romanMap[i];
        }
    }
    return roman;
};

const romanToDec = romanNumbers => {
    let romArray = romanNumbers.toUpperCase().split(''),
        num = 0, val = 0;
    while (romArray.length) {
        val = romanMap[romArray.shift()];
        num += val * (val < romanMap[romArray[0]] ? -1:1);
    }
    return !isNaN(num) ? num : ERROR;
};

const roman = numbers => {
    let stringNumber = numbers.toString();
    stringNumber = stringNumber.replace(/[^a-zA-Z0-9]/g, '');
    const numb = Number(numbers);
    if (numbers.length === 0) {
        return NOT_VALID_NUMBER;
    }
    return !isNaN(numb) ? decToRoman(numb) : romanToDec(stringNumber);
};