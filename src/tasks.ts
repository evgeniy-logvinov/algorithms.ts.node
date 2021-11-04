// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

const array = [3, 5, -4, 8, 11, 1, -1, 6]
const targetSum = 10

function checkArray(array, targetSumm) {
  for (let i = 0; i <= array.length - 1; i++) {
    const currentElement = array[i];

    for (let j = i + 1; j <= array.length - 1; j++) {
      const nextElement = array[j];
      const summ = currentElement + nextElement;
      if (summ === targetSumm) {
        return [currentElement, nextElement];
      }
    }
  }
  
  return [];
}

const students = [
  {name: 'test', age: 12, groupId: 1},
  {name: 'asdasd', age: 232, groupId: 2},
  {name: 'asdasdddd', age: 19, groupId: 1},
  {name: 'asdasddd2d', age: 44, groupId: 1},
]

function groupStudents(students) {
  return students.reduce((accum, item) => {
    if (item.age > 17) {
      if (accum[item.groupId] && accum[item.groupId].length) {
        accum[item.groupId].push(item);
      } else {
        accum[item.groupId] = [item];        
      }
    }
    return accum;
  }, {})
}

const strPol = 'tenet';
const strPol2 = 'asdasd';

function polindrom(str) {
  if (str === str.split('').reverse().join('')) {
    return true;
  }

 return false;
}

function polindrom2(str) {
  for (let i = 0; i <= str.lenght; i++) {
    if (str[i] !== str[str.lenght - i]) {
      return false;
    }
  }

 return true;
}

function isPrimeNumber(m) {
  for (let i = 2; i < m; i++) {
    if (m % i === 0) {
      return false;
    }
  }
  
  return true;
}

function easyNumbers(numb){
  const res = [];
  for (let j = 2; j < numb; j++) {
    if (numb % j === 0 && isPrimeNumber(j)) {
      res.push(j);
    }
  }

  return res;
}

function fibonachi(number) {
  if (number < 2) {
    return number;
  }

  return fibonachi(number-1) + fibonachi(number - 2);
}

// console.log(fibonachi(1));
// console.log(fibonachi(12));
// console.log(easyNumbers(189));
// console.log(polindrom(strPol));
// console.log(polindrom(strPol2));
// console.log(groupStudents(students));
// console.log(checkArray(array, targetSum));
// 
// Your previous Java content is preserved below:
// 
// /*
// Design a parking lot using object-oriented principles
// 
// Goals:
// - Your solution should be in Java - if you would like to use another language, please let the interviewer know.
// - Boilerplate is provided. Feel free to change the code as you see fit
// 
// Assumptions:
// - The parking lot can hold motorcycles, cars and vans
// - The parking lot has motorcycle spots, car spots and large spots
// - A motorcycle can park in any spot
// - A car can park in a single compact spot, or a regular spot
// - A van can park, but it will take up 3 regular spots
// - These are just a few assumptions. Feel free to ask your interviewer about more assumptions as needed
// 
// Here are a few methods that you should be able to run:
// - Tell us how many spots are remaining
// - Tell us how many total spots are in the parking lot
// - Tell us when the parking lot is full
// - Tell us when the parking lot is empty
// - Tell us when certain spots are full e.g. when all motorcycle spots are taken
// - Tell us how many spots vans are taking up
// 
// Hey candidate! Welcome to your interview. I'll start off by giving you a Solution class. To run the code at any time, please hit the run button located in the top left corner.
// */
// 
// import java.io.*;
// import java.util.*;
// 
// class Solution {
//   public static void main(String[] args) {
//     ArrayList<String> strings = new ArrayList<String>();
//     strings.add("Hello, World!");
//     strings.add("Please put code below");
//     for (String string : strings) {
//       System.out.println(string);
//     }
//   }
// }
// 
