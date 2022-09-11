function findFirstDuplicate(arr) {
  // type your code here
  let obj = {};
  for(let i = 0; i < arr.length; i++ ){
    if(obj[arr[i]]){
      return arr[i]
    }else {
      obj[arr[i]] = true
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("Expecting: 4");
  console.log("=>", findFirstDuplicate([2, 4, 21, 4, 0]));

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([2, 1, 3, 0,10,11]));

  console.log("Expecting: 2");
  console.log("=>", findFirstDuplicate([2, 1, 3, 2,10,20]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

//create an object
//iterate over the array
//check to see if element is in object
//if it is then return that element
//else place element in object
//return -1
