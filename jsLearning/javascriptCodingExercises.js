'use strict';

/*
 * Original JavaScript practice exercises inspired by common interview topics:
 * strings, arrays, objects, callbacks, classes, JSON, recursion, and coercion.
 * Reference topic source: https://www.geeksforgeeks.org/javascript/javascript-coding-questions-and-answers/
 */

const reverseString = (value) => String(value).split('').reverse().join('');

const isPalindrome = (value) => {
    const cleaned = String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === reverseString(cleaned);
};

const largestNumber = (numbers) => Math.max(...numbers);

const removeFirst = (items) => items.slice(1);

const greetWithCallback = (name, callback) => callback(`Hello, ${name}`);

const add = (first, second) => first + second;

const addProperty = (object, key, value) => ({ ...object, [key]: value });

const deleteProperty = (object, key) => {
    const copy = { ...object };
    delete copy[key];
    return copy;
};

const sumWithReduce = (numbers) => numbers.reduce((total, number) => total + number, 0);

const repeatText = (text, count) => String(text).repeat(count);

const numberPlusString = () => 1 + '2';

const stringMinusNumber = () => '6' - 1;

const strictEqualityCheck = () => 1 === '1';

const looseNullUndefinedCheck = () => null == undefined;

const sumArray = (numbers) => {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
};

const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor === 0) {
            return false;
        }
    }

    return true;
};

const fibonacci = (terms) => {
    const series = [];

    for (let index = 0; index < terms; index++) {
        if (index < 2) {
            series.push(index);
        } else {
            series.push(series[index - 1] + series[index - 2]);
        }
    }

    return series;
};

const factorial = (number) => {
    if (number < 0) {
        throw new RangeError('Factorial is not defined for negative numbers');
    }

    let result = 1;
    for (let value = 2; value <= number; value++) {
        result *= value;
    }
    return result;
};

const countWords = (sentence) => String(sentence).trim().split(/\s+/).filter(Boolean).length;

const sortAscending = (numbers) => [...numbers].sort((first, second) => first - second);

const mergeArrays = (first, second) => [...first, ...second];

const containsValue = (items, value) => items.includes(value);

const findIndexOfValue = (items, value) => items.indexOf(value);

const filterEvenNumbers = (numbers) => numbers.filter((number) => number % 2 === 0);

const squareNumbers = (numbers) => numbers.map((number) => number * number);

const average = (numbers) => sumArray(numbers) / numbers.length;

const minNumber = (numbers) => Math.min(...numbers);

const maxNumber = (numbers) => Math.max(...numbers);

const swapValues = (first, second) => [second, first];

const startsWithText = (text, prefix) => String(text).startsWith(prefix);

const endsWithText = (text, suffix) => String(text).endsWith(suffix);

const includesText = (text, searchText) => String(text).includes(searchText);

const capitalizeWords = (sentence) => String(sentence)
    .split(' ')
    .map((word) => word ? word[0].toUpperCase() + word.slice(1) : word)
    .join(' ');

const uppercaseArray = (items) => items.map((item) => String(item).toUpperCase());

const reverseArray = (items) => [...items].reverse();

const lastElement = (items) => items.at(-1);

const removeFalsyValues = (items) => items.filter(Boolean);

const recursiveFactorial = (number) => {
    if (number < 0) {
        throw new RangeError('Factorial is not defined for negative numbers');
    }

    return number <= 1 ? 1 : number * recursiveFactorial(number - 1);
};

const getObjectProperty = (object, key) => object[key];

const doubleWithMap = (numbers) => numbers.map((number) => number * 2);

class Learner {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `${this.name} is learning JavaScript`;
    }
}

const parseJsonName = (jsonText) => JSON.parse(jsonText).name;

const stringifyObject = (object) => JSON.stringify(object);

const wordsArray = (sentence) => String(sentence).trim().split(/\s+/).filter(Boolean);

const courseMessage = (course) => {
    switch (course.toLowerCase()) {
        case 'javascript':
            return 'This is a JavaScript course';
        default:
            return 'This is another course';
    }
};

const areAnagrams = (first, second) => {
    const normalize = (value) => String(value).toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    return normalize(first) === normalize(second);
};

const maxDifference = (numbers) => {
    let lowestSoFar = numbers[0];
    let bestDifference = 0;

    for (let index = 1; index < numbers.length; index++) {
        bestDifference = Math.max(bestDifference, numbers[index] - lowestSoFar);
        lowestSoFar = Math.min(lowestSoFar, numbers[index]);
    }

    return bestDifference;
};

const removeDuplicates = (items) => [...new Set(items)];

const countVowels = (text) => (String(text).match(/[aeiou]/gi) || []).length;

const uniqueCharacters = (text) => [...new Set(String(text))].join('');

const exercises = {
    reverseString,
    isPalindrome,
    largestNumber,
    removeFirst,
    greetWithCallback,
    add,
    addProperty,
    deleteProperty,
    sumWithReduce,
    repeatText,
    numberPlusString,
    stringMinusNumber,
    strictEqualityCheck,
    looseNullUndefinedCheck,
    sumArray,
    isPrime,
    fibonacci,
    factorial,
    countWords,
    sortAscending,
    mergeArrays,
    containsValue,
    findIndexOfValue,
    filterEvenNumbers,
    squareNumbers,
    average,
    minNumber,
    maxNumber,
    swapValues,
    startsWithText,
    endsWithText,
    includesText,
    capitalizeWords,
    uppercaseArray,
    reverseArray,
    lastElement,
    removeFalsyValues,
    recursiveFactorial,
    getObjectProperty,
    doubleWithMap,
    Learner,
    parseJsonName,
    stringifyObject,
    wordsArray,
    courseMessage,
    areAnagrams,
    maxDifference,
    removeDuplicates,
    countVowels,
    uniqueCharacters,
};

const demo = () => {
    const learner = new Learner('Riya');

    console.log('01 reverseString:', reverseString('JavaScript'));
    console.log('02 isPalindrome:', isPalindrome('Madam'));
    console.log('03 largestNumber:', largestNumber([4, 10, 2, 99]));
    console.log('04 removeFirst:', removeFirst([5, 6, 7]));
    greetWithCallback('Amit', (message) => console.log('05 greetWithCallback:', message));
    console.log('06 add:', add(6, 2));
    console.log('07 addProperty:', addProperty({ name: 'Riya' }, 'age', 21));
    console.log('08 deleteProperty:', deleteProperty({ name: 'Riya', age: 21 }, 'age'));
    console.log('09 sumWithReduce:', sumWithReduce([1, 2, 3]));
    console.log('10 repeatText:', repeatText('js', 3));
    console.log('11 numberPlusString:', numberPlusString());
    console.log('12 stringMinusNumber:', stringMinusNumber());
    console.log('13 strictEqualityCheck:', strictEqualityCheck());
    console.log('14 looseNullUndefinedCheck:', looseNullUndefinedCheck());
    console.log('15 sumArray:', sumArray([15, 6, 10, 2]));
    console.log('16 isPrime:', isPrime(7));
    console.log('17 fibonacci:', fibonacci(7));
    console.log('18 factorial:', factorial(5));
    console.log('19 countWords:', countWords('learn JavaScript every day'));
    console.log('20 sortAscending:', sortAscending([8, 1, 4, 2]));
    console.log('21 mergeArrays:', mergeArrays([1, 2], [3, 4]));
    console.log('22 containsValue:', containsValue(['api', 'ui'], 'api'));
    console.log('23 findIndexOfValue:', findIndexOfValue(['a', 'b', 'c'], 'b'));
    console.log('24 filterEvenNumbers:', filterEvenNumbers([1, 2, 3, 4]));
    console.log('25 squareNumbers:', squareNumbers([2, 3, 4]));
    console.log('26 average:', average([10, 20, 30]));
    console.log('27 minNumber:', minNumber([9, 3, 7]));
    console.log('28 maxNumber:', maxNumber([9, 3, 7]));
    console.log('29 swapValues:', swapValues('first', 'second'));
    console.log('30 startsWithText:', startsWithText('JavaScript', 'Java'));
    console.log('31 endsWithText:', endsWithText('JavaScript', 'Script'));
    console.log('32 includesText:', includesText('Cypress API tests', 'API'));
    console.log('33 capitalizeWords:', capitalizeWords('hello javascript'));
    console.log('34 uppercaseArray:', uppercaseArray(['js', 'api']));
    console.log('35 reverseArray:', reverseArray([5, 6, 7, 8]));
    console.log('36 lastElement:', lastElement([6, 2, 9, 5]));
    console.log('37 removeFalsyValues:', removeFalsyValues([0, 5, false, 6, '', 7]));
    console.log('38 recursiveFactorial:', recursiveFactorial(4));
    console.log('39 getObjectProperty:', getObjectProperty({ name: 'GFG', age: 25 }, 'name'));
    console.log('40 doubleWithMap:', doubleWithMap([5, 6, 7]));
    console.log('41 Learner.introduce:', learner.introduce());
    console.log('42 parseJsonName:', parseJsonName('{"name":"Geeks"}'));
    console.log('43 stringifyObject:', stringifyObject({ name: 'Geeks' }));
    console.log('44 wordsArray:', wordsArray('Geeks For Geeks'));
    console.log('45 courseMessage:', courseMessage('javascript'));
    console.log('46 areAnagrams:', areAnagrams('listen', 'silent'));
    console.log('47 maxDifference:', maxDifference([1, 2, 90, 10, 110]));
    console.log('48 removeDuplicates:', removeDuplicates([5, 2, 5, 6, 6, 7]));
    console.log('49 countVowels:', countVowels('hello geek'));
    console.log('50 uniqueCharacters:', uniqueCharacters('geeksforgeeks'));
};

if (require.main === module) {
    demo();
}

module.exports = exercises;
