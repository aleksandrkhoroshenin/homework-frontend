'use strict';

/**
 * Функции осуществляют перевод из римских цифр в десятичные и обратно
 *
 * @author
 * Aleksandr Khoroshenin
 */

/**
 * Наименование ошибок
 * */
const NOT_VALID_NUMBER = 'Not valid number', ERROR = 'error';

/*
* мапа для соответствия римских цифр десятичным
* */
const romanMap = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
};

/*
* Функция по переводу из десятичной в римские
* @params {dec} - входной параметр
* @return {roman} - Строка с римским числом
* */

const decToRoman = dec => {
    if (dec < 0) {
        return NOT_VALID_NUMBER;
    }
    let roman = '';
    for (let i in romanMap ) {
        while ( !(dec < romanMap[i]) ) {
            roman += i;
            dec -= romanMap[i];
        }
    }
    return roman;
};

/*
* Функция по переводу из римских в десятичные
* @params {romanNumbers} - входной параметр
* @return {roman} - Строка с десятичным числом
* */

const romanToDec = romanNumbers => {
    let num = 0, val = 0;
    romanNumbers.forEach( (item, i, arr) => {
        val = romanMap[item];
        num += val * (val < romanMap[romanNumbers[i < arr.length ? i + 1 : i]] ? -1 : 1);
    });
    return !isNaN(num) ? num : ERROR;
};

/*
* Точка входа программы
* @params {numbers} - входной параметр
* @return - Строка с десятичным или римским числом, в зависимости от входных данных
* */

const roman = numbers => {
    if (numbers.length === 0) {
        return NOT_VALID_NUMBER;
    }
    if (typeof numbers === 'boolean') {
        return ERROR;
    }
    let arrayNumber = numbers
        .toString()
        .replace(/[^a-zA-Z0-9]/g, '')
        .toUpperCase()
        .split('');
    return !isNaN(Number(numbers)) ? decToRoman(Number(numbers)) : romanToDec(arrayNumber);
};
