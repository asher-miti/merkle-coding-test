# merkle-coding-test

*********
1. Longest Sequence
I wanted to keep this solution as efficient as possible by only running 1 loop. The idea behind it is to reset the count to 1 as soon as we find a character not
matching with the previous. If the character doesn't match, then we update the count if need be aswell as the character for the end result. I believe the time complexity 
for this solution is O(n) and space complexity is O(1). 
I actually struggled in the end with this question due to having to return the information for the letter that comes first alphabetically if there are mulitple sequences of the same length. How I solved this in the end, was to keep all the letters with the max length in an array and sort the array after the loop, then choose the value at index zero.

*********
2. Second Lowest Frequency
I found this question to be the most difficult. Although the concept was simple, the execution was difficult and I found my final solution to be a lot less intuitive than I expected.
I spent the most time on this particular solution and it works like so:

-Get the frequency of each input value
-Group together all values with the same frequency
-Sort these grouped pairs by frequency and select the nth-lowest
-If the nth-lowest frequency has multiple pairs, sort these pairs by value, and select the mth-lowest pair
-Return the value of this final pair

The m and n parameters I refer to here are called freqInd and valInd in the code. In order to select the second-lowest frequency, freqInd should be 1, 
not 2 (since 0 would select the lowest, and therefore 1 selects the second-lowest).

I don't believe this to be the most optimal solution but it's the question I struggled most with and whereas I'm sure a solution could have a better runtime than using sort, the runtime is signifcantly better when valInd is a small value

*********
3. Savings Account Balance
I spent less time on this question once I figured out the initial logic to solving this using a while loop based on decrementing the numMonths each time by 1. By knowing how to
calculate the percentages of the current sum using the provided rates and ensuring this runs according to the number of months before hitting 0, I believe the solution runs in O(n) time and O(1) space complexity.

*********
4. Recursive Reverse String
My process and thinking here was to have the function take in the string as well as the string's length (n), and if the string's length is 0, to return an empty string in the first instance. If the string is not empty, the last character of the string will be added with the second to last character by calling the same function recursively. I believe time complexity for this is O(n) and as I am calling this function recursively, it will be stored in the call stack so space complexity is O(n).



