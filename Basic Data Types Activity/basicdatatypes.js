/*
Basic Types activity
- Create 3 variables and set them up to the given instructions. Also, type check them with the typeof operator in the console.
*/
//your code here
let myFirstName = "Disha"
console.log(typeof(myFirstName))
let numberOfCities = 5
console.log(typeof(numberOfCities))
let havingFun = true
console.log(typeof(havingFun))
///////////////////////////////////
//check results in browser console
console.log('myFirstName: ', myFirstName);
console.log('numberOfCities: ', numberOfCities);
console.log('havingFun: ', havingFun);

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { myFirstName, numberOfCities, havingFun };
}
