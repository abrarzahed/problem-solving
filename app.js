/*
function myFunction(a, n) {
  return a[n - 1];
}
console.log(myFunction('abcd', 1));
*/

/*
function myFunction2(a, b) {
  console.log(typeof a);
  return a === b ? true : false;
}
console.log(myFunction2(3, 3));
*/

/*
function myFunction(a, b) {
  return a.hasOwnProperty(b);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z'));
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'));
*/

/*
function myFunction(str) {
  return str.substr(-3);
}
console.log(myFunction('abcdefg'));
*/

/*
function myFunction(obj) {
  return obj?.country;
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }));
*/

/*
function myFunction(obj, key) {
  return obj[key];
}
console.log(myFunction({ continent: 'Asia', country: 'Japan' }, 'continent'));
*/

/*
function myFunction(a) {
  let test = a.split('');
  test.splice(-3);
  return test.join('');
}
console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
*/

/*
function myFunction(a) {
  return a.slice(0, a.length / 2);
}
console.log(myFunction('abcdefgh'));
console.log(myFunction('1234'));
*/

/*
function myFunction(set, val) {
  return [...set].includes(val);
}
console.log('set', myFunction(new Set([1, 2, 3]), 2));
*/

/*
function myFunction(a) {
  a.splice(0, 3);
  return a;
}
console.log(myFunction([1, 2, 3, 4]));
*/

/*
function myFunction(a, b) {
  if (a.hasOwnProperty(b) && a[b]) return true;
  return false;
}
console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z'));
*/

/*
function myFunction(a) {
  let negative = 0;
  a.forEach(e => {
    if (e < 0) negative++;
  });
  return negative;
}
console.log(myFunction([1, -2, 2, -4]));
*/

/*
const button = document.querySelector('#wrapper button');

const changeInput = () => {
  const input = document.querySelector('#inputEl');
  if (input) {
    input.value = 'Hello World';
  }
};

button.addEventListener('click', changeInput);

document.querySelector('#wrapper input').setAttribute('id', 'inputEl');
*/

/*
const listItems = [...document.querySelectorAll('#list li')].filter(
  el => !el.id
);
const button = document.getElementById('button');

const handleClick = () => {
  listItems.forEach(item => {
    const oldText = item.innerText;
    return (item.innerText = oldText === 'ON' ? 'OFF' : 'ON');
  });
};
if (listItems.length > 1) {
  button.addEventListener('click', handleClick);
}
*/

/*
const element = document.querySelector('#element');

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? 'orange' : 'black';
};

// type in your code here
element.addEventListener('mouseenter',  toggleColor(true))
element.addEventListener('mouseleave', toggleColor(false))
*/

//=== add todo item in last  ===//
/*
const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here
  const todoItem = document.getElementById('input').value;
  todoItem &&
    document
      .getElementById('list')
      .insertAdjacentHTML('beforeend', `<li>${todoItem}</li>`);
});
*/

//=== drag and drop  ===//
/*
 const dragItem = document.querySelector('#dragItem');
  const dropArea = document.querySelector('#dropArea');
  
  const handleDragOver = (event) => event.preventDefault();
  dropArea.addEventListener('dragover', handleDragOver);
  
  const handleDrop = () => {
    dropArea.append(dragItem);
  };
  
  dropArea.addEventListener("drop",handleDrop);
  */

//=== wrap an element with a newly created parent element  ===//
/*
  
  const button = document.querySelector('#button');
  
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  button.parentNode.append(wrapper);
  wrapper.append(button);
  
  const btn = document.querySelector('#wrapper btn');
  
  if(btn) {
    const handleClick = () => {
      btn.innerText = 'Thank you! ❤️'
    }
  
    btn.addEventListener('click', handleClick)
  }
  */

//=== checkbox checked by button click  ===//
/*
const button = document.getElementById('button');
button.addEventListener('click', () => {
  const check = (document.getElementById('checkbox').checked = true);
});
*/

/*
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}

console.log(myFunction('cheese', 'cake'));
console.log(myFunction('lips', 's'));
*/

/*
// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(3);
}
console.log(myFunction('abcdefg'));
*/

/*
// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunction(a) {
  return a.slice(-3);
}
console.log(myFunction([1, 2, 3, 4]));
*/

/*
// Write a function that takes an object (a) as argument
// Return an array with all object keys
function myFunction(a) {
  return Object.keys(a);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }));
*/

/*
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}
console.log(myFunction(10, 100));
*/

/*
// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise
function myFunction(a, b) {
  return a.getTime() < b.getTime();
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
*/

/*
// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array
function myFunction(a, b) {
  return a.filter((i) => i !== b);
}

console.log(myFunction([1, 2, 3], 2));
*/

/*
// Write a function that takes a Set as argument
// Convert the Set to an Array
// Return the Array
function myFunction(set) {
  return [...set];
}
console.log(myFunction(new Set([1, 2, 3])));
*/

/*
// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
  return a.reduce((prev, cur) => prev + cur, 0);
}
console.log(myFunction([10, 100, 40])); // 150
*/

/*
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
function myFunction(a, n) {
  return a.slice(-n);
}
console.log(myFunction([1, 2, 3, 4, 5], 2));
*/

/*
// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
  //=== long way  ===//
  // let one = a + b;
  // let two = one - c;
  // let three = two * d;
  // let four = three / e;
  // return four ** f;

  //=== short way  ===//
  return (((a + b - c) * d) / e) ** f;
}

console.log(myFunction(6, 5, 4, 3, 2, 1));
console.log(myFunction(6, 2, 1, 4, 2, 3));
*/

/*
// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result
function myFunction(set, val) {
  set.has(val) && set.delete(val);
  return set;
}
console.log(myFunction(new Set([1, 2, 3]), 1)); // new Set([2, 3])
*/

/*
// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
  return Object.values(a).reduce((prev, cur) => prev + cur, 0);
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
*/

/*
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b) {
  return (a / 100) * b;
}
console.log(myFunction(100, 50));
*/

/*
// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object
function myFunction(a, b) {
  return { [a]: b };
}
console.log(myFunction("a", "b")); // {a:'b'}
*/

/*
// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a) {
  return a % 2 === 0;
}
console.log(myFunction(11));
*/

/*
// Write a function that takes an array of numbers as argument
// It should return the average of the numbers
function myFunction(arr) {
  return arr.reduce((prev, cur) => prev + cur, 0) / arr.length;
}
console.log(myFunction([10, 100, 40])); // 50
*/

/*
// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor
function myFunction(obj) {
  return obj["prop-2"];
}
console.log(myFunction({ one: 1, "prop-2": 2 })); // 2
*/

/*
// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'
function myFunction(obj) {
  // const newObj = obj;
  // delete newObj?.b;
  // return newObj;

  const { b, ...rest } = obj;
  console.log(b, rest);
  return rest;
}
console.log(myFunction({ a: 1, b: 7, c: 3 })); // { a: 1, c: 3 }
*/

/*
// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result
function myFunction(a, b, c) {
  return new Set([a, b, c]);
}
console.log(myFunction(1, "b", 3)); // new Set([1, 'b', 3])
*/

/*
// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}
console.log(myFunction([1, 3, 2])); // [3,2,1]
*/

/*
// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {
  return Number.isInteger(a);
}
console.log(myFunction(4.3)); //
*/

/*
// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  // let counter = 0;
  // for (let i = 0; i < b.length; i++) {
  //   b[i] == a && counter++;
  // }
  // return counter;

  return b.split(a).length - 1;
}
console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
*/

/*
// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
  // let wordToReturn = "";
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].length > wordToReturn.length) {
  //     wordToReturn = arr[i];
  //   }
  // }
  // return wordToReturn;

  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}
console.log(myFunction(["help", "me"]));
*/

/*
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(alphabet[alphabet.indexOf(str[i]) + 1]);
  }
  return arr.join("");
}
console.log(myFunction("bnchmf")); // 'coding'
console.log(myFunction("bgddrd"));
*/

/*
// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a) {
  return +a.toFixed(2);
}
console.log(myFunction(2.12397));
*/

/*
// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction(a, b) {
  return a.filter((n) => n > b).reduce((prev, curr) => prev + curr, 0);
}
console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
*/

/*
// Sounds easy, but you need to know the trick
// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  return a.getTime() === b.getTime();
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
*/

/*
// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDay() === b.getDay()
  );
}

console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/01")));
console.log(myFunction(new Date("2000/01/01"), new Date("2000/01/02")));
*/

/*
// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b) {
  const obj = {};
  obj.hrs = a.getHours() - b.getHours();
  obj.min = Math.abs(a.getMinutes() - b.getMinutes());
  obj.sec = Math.abs(a.getSeconds() - b.getSeconds());
  return obj;
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);
*/

/*
// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
  const difference = a.getTime() - b.getTime();
  return Math.abs(difference / (1000 * 3600 * 24));
}
console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01")));
*/

/*
// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC
function myFunction(a, b) {
  a.setDate(a.getDate() + b);
  return a.getTime();
}
console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 31));
*/

/*
// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
function myFunction(a, b) {
  const oneHour = 60 * 60 * 1000;
  const dif = Math.abs(a.getTime() - b.getTime());
  return dif <= oneHour;
}
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 09:45:00"))
);
*/

/*
// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15
function myFunction(date) {
  const minutes = date.getMinutes();
  if (minutes <= 0) {
    return 0;
  } else if (minutes <= 15) {
    return 15;
  } else if (minutes <= 30) {
    return 30;
  } else if (minutes <= 45) {
    return 45;
  } else {
    return 60;
  }
}

console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)));
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)));
*/

/*

function myReplace(str, before, after) {
  const arr = str.split(" ");

  const indexOfWordToRemove = arr.indexOf(arr.find((word) => word === before));

  if (before[0].toUpperCase() === before[0]) {
    arr[indexOfWordToRemove] = after.slice(0, 1).toUpperCase() + after.slice(1);
  } else if (before[0].toLowerCase() === before[0]) {
    arr[indexOfWordToRemove] = after.slice(0, 1).toLowerCase() + after.slice(1);
  } else {
    arr[indexOfWordToRemove] = after;
  }
  return arr.join(" ");
}

console.log(myReplace("He is sleeping on the couch", "Sleeping", "sitting"));
*/

/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
/*
function pairElement(str) {
  return str.split("").map(function (el) {
    if (el === "A") {
      return ["A", "T"];
    } else if (el === "T") {
      return ["T", "A"];
    } else if (el === "C") {
      return ["C", "G"];
    } else {
      return ["G", "C"];
    }
  });
}

console.log(pairElement("GCG"));
*/

/*
Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

/*

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
console.log(fearNotLetter("abce"));
*/

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/
/*
function uniteUnique(arr) {
  return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.dir(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/

/*
write a function that will find and return an item and its parent column from an array which contains columns as objects

Each column has an id property and an array of items property. Those items objects also contain an id along with a tile property
*/
/*
const data = [
  {
    id: 1,
    items: [
      {
        id: 121,
        text: "Learn javascript",
      },
      {
        id: 122,
        text: "Master your javascript",
      },
    ],
  },
  {
    id: 2,
    items: [
      {
        id: 212,
        text: "Learn css",
      },
      {
        id: 213,
        text: "Master your css",
      },
    ],
  },
];
function findItemAndColumn(columnsData, itemID) {
  const [item, parentColumn] = (() => {
    for (const column of columnsData) {
      // const item = column.items.find((item) => item.id === itemID);

      // if (item) {
      //   return [item, column];
      // }
      for (const item of column.items) {
        if (item.id === itemID) {
          return [item, column];
        }
      }
    }
  })();
  return [item, parentColumn];
}

const [item, column] = findItemAndColumn(data, 122);
console.log(`Item: ${JSON.stringify(item)}, column: ${JSON.stringify(column)}`);
*/
