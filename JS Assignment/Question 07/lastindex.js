const arr = ["pw skills","leetcode", "ninjas",  "namaste", "apna", "pw skills", "babbar"]
const lastOccurrence = arr.lastIndexOf("pw skills"); // to find lastOccurrence
const firstIndexMethod = arr.indexOf("pw skills");
const firstOccurrence = (arr.length - 1) - arr.reverse().lastIndexOf("pw skills");

const pwskill = `The first occurrence of "pw skills" is at index is: ${firstOccurrence}
The last occurrence of "pw skills" is at index  is: ${lastOccurrence} `;

console.log(pwskill);

/** imp thing to notice
 * we need to get last index firstly bcz due to object reference concept 
 * arr goes to revrse  so,its change original array so it will give wrong index 
*/
console.log(`firsr occurreance using indexOf :${firstIndexMethod}`);