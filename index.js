function isPalindrome(word) {
  // Write your algorithm here
  const reversdWord = word.split('').reverse().join('');
  if (word.toLowerCase() === reversdWord.toLowerCase()) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  initialize empty string called reversdWord
  
  if word is equal to the reversdWord in LowerCase :  
    return true
  else return false
*/

/*
  Add written explanation of your solution here
  as long as there is no built-in method called reverse for string,
  I've converted the string into array, using the split method,
  then reversing the array, and finally joining the elements back into a string with the join method.
  after that if the reversdWord is equal to word then return true, otherwise false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("Mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
