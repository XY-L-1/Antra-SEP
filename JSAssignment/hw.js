// Antra JS Homework

// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223
function reverseNum(num) {
   let ans = 0;
   while (num > 0) {
      ans = (ans * 10) + (num % 10);
      num = Math.floor(num / 10);
   }
   return ans;
}

// 2 
function isPalindrome(str){
   let reversedStr = "";
   for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
   }

   if (str == reversedStr) {
      return true;
   }

   return false;
}

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og,
function generateCombinations(str) {
   let result = [];
   for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j <= str.length; j++) {
         result.push(str.slice(i, j));
      }
   }
   return result;
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed st
function alphaString(str) {
   return str.split("").sort().join("");
}


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter
// of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '
function capFirstLetter(str) {
   let ans = str.split(" ");
   for (let i = 0; i < ans.length; i ++){
      ans[i] = ans[i][0].toUpperCase() + ans[i].slice(1);
   }
   return ans.join(" ");
}


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'
function longestWord(str) {
   let words = str.split(" ");
   let index = 0;
   let longest = 0;
   for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest) {
         longest = words[i].length;
         index = i;
      }
   }
   return words[index];
}

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function vowelNum(str) {
   let chars = str.toLowerCase().split("");
   let num = 0;
   for (let i = 0; i < chars.length; i++){
      if(chars[i] == 'a' || chars[i] == 'e' || chars[i] == 'i' || chars[i] == 'o' || chars[i] == 'u'){
         num ++;
      }
   }
   return num;
}

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function isPrime(num){
   if (num <= 1){
      return false
   }
   const limit = Math.sqrt(num);
   for (let i = 2; i < limit; i ++){
      if (num % i === 0){
         return false
      }
   }
   return true
}


// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number,
// string, and undefined.
function getType(obj) {
   return typeof(obj);
}


// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n) {
   let matrix = [];
   for (let i = 0; i < n; i++) {
      matrix[i] = [];
      for (let j = 0; j < n; j++) {
         if (i === j) {
            matrix[i][j] = 1;
         }
         else {
            matrix[i][j] = 0;
         }
      }
   }
   return matrix;
}



// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 
function secondLowHigh(arr) {
   return arr[1] + "," + arr[arr.length - 2];
}


// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal
// to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and
// 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1
// + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by
// the perfect numbers 496 and 8128.
function isPerfect(num) {
   let sum = 0;
   for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
         sum += i;
      }
   }
   return sum === num;
}

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function getFactors(num) {
   let factors = [];
   for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
         factors.push(i);
      }
   }
   return factors;
}


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1
function amountToCoins(amount, coins) {
   let ans = [];
   for (let i = 0; i < coins.length; i++) {
      while (amount >= coins[i]) {
         ans.push(coins[i]);
         amount -= coins[i];
      }
   }
   return ans.toString();
}



// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 
function power() {
   let b = parseFloat(prompt("Enter base: "));
   let n = parseInt(prompt("Enter exponent: "), 10);

   let result = b ** n;
   alert("Result: " + result);
}


// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"
function uniqueChars(str) {
   let ans = "";
   for (let i = 0; i < str.length; i++) {
      if (! ans.includes(str[i])) {
         ans += str[i];
      }
   }

   return ans;
}


// 17. Write a JavaScript function to get the number of occurrences of each letter in specified
// string. 
function letterCount(str) {
   let count = {};
   for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (count[char]) {
         count[char]++;
      } else {
         count[char] = 1;
      }
   }
   return count;
}

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it
// finds the desired value.
function binarySearch(arr, target) {
   let left = 0;
   let right = arr.length - 1;

   while (left <= right) {
      let mid = Math.floor((right - left)/2) + left;

      if (arr[mid] === target) {
         return mid;
      }
      if (arr[mid] < target) {
         left = mid + 1;
      }
      else {
         right = mid - 1;
      }
   }

   return "Not found";
}

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerThan(arr, num) {
   let ans = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
         ans.push(arr[i]);
      }
   }
   return ans;
}

// 20. Write a JavaScript function that generates a string id (specified length) of random
// characters. 
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
function generateID(length) {
   let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   let id = "";
   for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
   }
   return id;
}

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]
function getSubsets(arr, length) {
   let result = [];
   function helper(start, subset) {
      if(subset.length === length) {
         result.push(subset.slice());
         return;
      }

      for (let i = start; i < arr.length; i++){
         subset.push(arr[i]);
         helper(i+1, subset);
         subset.pop();
      }
   }
   helper(0, []);
   return result;
}

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the
// function will count the number of occurrences of the specified letter within the string.
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 
function letterCount(str, letter) {
   return [...str].filter(char => char === letter).length;
   // or 
   return [...str].reduce((count, char) => count + (char === letter ? 1: 0), 0);
   // or
   return str.split(letter).length - 1;
}


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function firstNotRepeated(str) {
   let count = {};
   for (let ch of str) {
      count[ch] = (count[ch] || 0) + 1;
   }

   for (let ch of str) {
      if (count[ch] === 1) {
         return ch;
      }
   }

   return null;
}

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
function bubbleSort(arr) {
   let n = arr.length;
   for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
         if(arr[j] < arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
         }
      }
   }

   return arr;
}


// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function longestCountryName(countries) {
   return countries.reduce( (longest, country) => country.length > longest.length ? country : longest, "");
}

// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 
function longestSubstring(str) {
   let longest = "";
   let current = "";

   for (let i = 0; i < str.length; i++) {
      if (current.includes(str[i])) {
         current = current.slice(current.indexOf(str[i]) + 1);
      }
      current += str[i];
      if (current.length > longest.length) {
         longest = current;
      }
   }

   return longest;
}

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or
// longest symmetric factor problem is the problem of finding a maximum-length contiguous
// substring of a given string that is also a palindrome. For example, the longest palindromic
// substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be
// unique; for example, in the string "abracadabra", there is no palindromic substring with length
// greater than three, but there are two palindromic substrings with length three, namely, "aca"
// and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is,
// all substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.
function longestPalindrome(str) {
   function helper(left, right) {
      while(left >= 0 && right < str.length && str[left] === str[right]) {
         left--;
         right++;
      }
      return {
         start: left + 1,
         length: right - left - 1
      };
   }

   let start = 0, maxLength = 0;
   for (let i = 0; i < str.length; i++) {
      let odd = helper(i, i);
      if (odd.length > maxLength) {
         start = odd.start;
         maxLength = odd.length;
      }

      let even = helper(i, i + 1);
      if (even.length > maxLength) {
         start = even.start;
         maxLength = even.length;
      }
   }

   return str.slice(start, start + maxLength);
}

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 
var once = function(fn) {
   let called = false;
   return function(...args){
      if (!called) {
         called = true;
         return fn(...args);
      }else {
         return undefined;
      }
   }
}

var add = function(a, b) {
   return a + b;
}

var onceAdd = once(add);

// 29. Write a JavaScript function to get the function name
function getFunctionName(fn) {
   return fn.name;
}
