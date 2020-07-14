// Implement a function reverseString(string) which accepts a string parameter, reverses it and returns it.
// Do not use .reverse() or any other standard JavaScript string functions or sorting functions. Do not use loops or iteration. Use the following ideas to implement the function recursively:
// - if the string is empty, its reverse is the empty string
// - if the string has one character, return it
// - otherwise, the result is a concatenation of the string parameter without the first letter, in reverse, and the first letter at the end

// Example outputs:
// reverseString( “abcb”, 4 ) === “bcba”
// reverseString( “test”, 4 ) === “tset”
// reverseString( “racecar”, 7 ) === “racecar”

let reverseString = (string, n) => {
  if (n == 0) {
    return "";
  }
  return string[n - 1] + reverseString(string, --n);
};
