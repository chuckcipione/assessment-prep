/////////////Variables/////////////
//1. Write a variable called color with a value of "dark blue".

var color = "dark blue";

//2. Write a variable, myFave, that has the value "My favorite color is "

var myFave = "My favorite color is ";

//3. Use the variables from 1 and 2 to make myFavoriteColor equal
//   "My favorite color is dark blue" (concatenate)
var myFavoriteColor = myFave + color;

//4. Create an array of strings that includes the letters a - d in order.
var aThroughD = ['a', 'b', 'c', 'd'];
//5. Remove 'a' and store it to a variable called isForApple.

var isForApple = aThroughD.shift('a');

//6. Add 'e' to the end of aThroughD.

aThroughD.push('e');

//7. Add 'apple' to the beginning of aThroughD
aThroughD.unshift('apple');

//8. Remove 'c' from the array and put 'cat' in its place
for(var i = 0; i < aThroughD.length; i++){
  if(aThroughD[i] === "c"){
    aThroughD[i] = "cat"
  }
} 

//9. Leave 'apple' in the array but put a copy of it on a var called bestFruit
var bestFruit = JSON.parse(JSON.stringify('apple'));


//10. Create an object called spaceJam
//    spaceJam has: a title of 'Space Jam' (String)
//                  a release_year of 1996 (Number)
//                  is not an oscarAwardWinner (Boolean)
//                  and has the stars Michael Jordan, Bugs Bunny, and Bill Murray (array of strings)

var spaceJam = {
  title: 'Space Jam',
  release_year: 1996,
  oscarAwardWinner: false,
  stars: ['Michael Jordan', 'Bugs Bunny', 'Bill Murray']
}


//11. Change anakin's side to dark using bracket notation

var anakinSkywalker =  {
  side: 'light',
  other_names: ['Darth Vader', 'Ani'],
  children: ['Luke', 'Leia'],
  former_significant_other: 'Padme Amidala',
  former_mother: 'Shmi Skywalker'
}

anakinSkywalker['side'] = 'dark';

//12. Add 'Jar Jar' to his children using dot notation

anakinSkywalker.children = 'Jar Jar';

//13. Loop through the object and remove any property that starts with former

for (var key in anakinSkywalker){
  if(key.split('_')[0] === 'former') {
    delete anakinSkywalker[key];
  }
}

//14. Create a function called finder that takes in an array and a string and loops through the array
//    to remove every instance of that string

function finder(array, string){
  return array.filter(function(element){
    return element !== string;
  });
}



//15. Write a function called numChecker that takes in a parameter and checks to see if it is a number or a
  //number in a string (ie '12' or 12) - if so, return true, else return false

function numChecker(num){
  if(Number(num) || Number(num) === 0){
    return true;
  } else {
    return false;
  }
}

//16. Write a function called rightNow that returns a new date object

function rightNow(){
  return new Date();
}

rightNow();

//17. Write a function called whoAmI that takes in an object and returns the value of the
//    object's name property, and if the object's name
//    is undefined, return 'has amnesia'.

var me = {
  name: 'Chuck'
}

function whoAmI(obj) {
  if(obj.name === undefined) {
    return 'has amnesia';
  } else {
    var theName = obj.name;
    return theName;
  }
}

whoAmI(me);


//18. Write a function called returnMe that takes in a num and a callback function and
//    returns the result of the callback function invoked with the num as a parameter

function returnMe(num, cb){
  cb(num);
    return cb(num);
};


