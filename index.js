function hasTargetSum(array, target) {
  // Write your algorithm here
  const myArray = new Set();

  for (let num of array) {
    const complement = target - num;

    if (myArray.has(complement)){
      return true;
    }
    myArray.add(num);
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  -The function iterates through each element of the input array exactly one.
  - Inside the loop, the function performs set operations(addition and checking for existence) in constant time. Becasue tje set is being used to store numbers seen so far the time complexity of set operations is O(1).
  - Thus the time complexity is linear with respect to the size of the input array, whcih makes it O(n).
*/

/* 
  Add your pseudocode here
  -Initialize an empty set named 'myArray'
  -For each number 'num' in array calculate the difference whereby you subract num from the target
  -If the difference is in the "myArray" set it to return true as there exists a pair whose sum equals the target
  -Add num to the "myArray" set
  -Finally if there is no pair found during the iteration return false
*/

/*
  -Add written explanation of your solution here
  -We initialize an empty set "myArray" that will store numbers that we have encountered while iterating through the array
  -We loop through each number in the input array
  -We calculate the difference between the `target` and `num` which represents the number we need to find in the array to reach the target sum
  -We then check if the difference exists in the set and if yes then we are there we return a true
  -If not found we add the current number to the "myArray" set
  -If no pair is found after iterating through the entire array, we return `false`
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11, 80, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 60, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 3));
}

module.exports = hasTargetSum;
