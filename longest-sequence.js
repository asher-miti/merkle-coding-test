// Implement the function longestSequence(sequence)which takes a string of letters and finds the longest sequence where the same letter occurs continuously.
// The function must return an object literal {c: n} where c is the lowercase character and n is the length of this sub-sequence.
// If there are multiple characters with a continuous sequence of the same length, return the information for the letter which occurs first alphabetically.

// Example outputs:
// longest_sequence( "dghhhmhmx" ) === {h: 3}
// longest_sequence( "dhkkhhKKKt" ) === {k: 3}
// longest_sequence( "aBbBadddadd" ) === {b: 3}

let longestSequence = (sequence) => {
  sequence = sequence.toLowerCase();
  let count = 1;
  let max = 0;
  let maxChars = [];

  //   Find the maximum repeating character starting from 1st index and check it against it's previous entry
  for (let i = 1; i <= sequence.length; i++) {
    if (sequence[i] == sequence[i - 1]) {
      count++;
    } else {
      if (count > max) {
        max = count;
        maxChars = [sequence[i - 1]];
      } else if (count === max) maxChars.push(sequence[i - 1]);
      count = 1;
    }
  }

  let maxChar = maxChars.sort()[0];
  return { [maxChar]: max };
};
