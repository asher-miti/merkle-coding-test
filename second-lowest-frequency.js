// Write a function which accepts an array of integers and returns an element of that array.
// The function should determine the frequency of each element (how many times the element appears in the array) and whenever possible should return the element with the second-lowest frequency. Otherwise it should return the integer with the lowest frequency.
// If there is more than one element satisfying the requirements then the second smallest one (according to value) should be returned.

// Example outputs:
// secondLowest( [4, 3, 1, 1, 2] ) === 1
// secondLowest( [4, 3, 1, 1, 2, 2] ) === 2
// secondLowest( [4, 3, 1, 2] ) === 2

let lowestFreqVal = (freqInd, valInd, values) => {
  let map = new Map();
  for (let val of values) map.set(val, (map.get(val) || 0) + 1);

  // Group together all val/freq pairs with the same frequency
  let freqMap = new Map();
  for (let [value, freq] of map) freqMap.set(freq, (freqMap.get(freq) || []).concat([[value, freq]]));

  let byFreq = [...freqMap].sort(([freq1], [freq2]) => freq1 - freq2);

  // Here are all the items of the `freqInd`-th lowest frequency, sorted by value
  let lowestItems = byFreq[Math.min(byFreq.length - 1, freqInd)][1].sort(([v1], [v2]) => v1 - v2);

  // Return the `valInd`-th lowest value
  return lowestItems[Math.min(lowestItems.length - 1, valInd)][0];
};
