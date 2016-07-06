//Read about the Array.prototype.sort method. Create a function that can be used with sort. 
// This function should take two strings, and return a value that sort can use to determine 
// which is the longest string. Finally, create an array of strings and try to get it 
// sorted using your new function

var strArray = ["Maxime","Jess","Jared"];

function compareStr(a, b) {
  return a.localeCompare(b);
}


//console.log(strArray.sort(compareStr));

// Create an array of objects (don’t need to use new here, just regular object literals). These objects 
// will contain a name and email property. Then, run some code that will sort your array by the longest name. 
// Then, run some code that will sort your array by e-mail address in alphabetical order.

//var objArray = [{name:"Jess", email:"jessica@gmail.com"}, {name:"Max", email:"martin@hotmail.com"},
//       {name:"jared", email:"carbonneau@gmail.com"}];
        
function compareName(a, b) {
  if (a.name.length > b.name.length) {
    return -1;
  }
  if (a.name.length < b.name.length) {
    return 1;
  }
  return 0;
}   

function compareEmail(a, b) {
    return a.email.localeCompare(b.email);
}   

// console.log(objArray.sort(compareName));
// console.log(objArray.sort(compareEmail));

// Create a function that can be used with Array.prototype.map. This function should take a number
// and return its square. Then, use this function with map on an array of numbers to check the result.

var numbers = [1, 4, 9];
function sqr(num) {
    return num*num;
}

//console.log(numbers.map(sqr));

// Create a function that can be used with Array.prototype.map. This function should be able to take 
// an object and square its “num” property. Then, use this function with map on an array of objects 
// each containming a “num” property.

function objSqr(obj) {
    return obj.num*obj.num;
}

var objArr2 = [{name:"Jess", num:12}, {name:"Max", num:3}, {name:"jared", num:9}];

//console.log(objArr2.map(objSqr));

//#5. In a previous workshop, you had to create a function that took two numbers and an operation 
// (add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are 
// going to do the same but at a higher order. Create a function called operationMaker that takes 
// only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”.
// Your function will return a function that will take two numbers and return the result of running 
// operation on these numbers. The end result should let me do something like this

function operation(operator) {
    return function equation(num1,num2) {
        switch (operator) {
            case 'add' : 
                 return num1+num2;
            case 'subtract' :
                return num1-num2;
            case 'mult' :
                return num1*num2;
            case 'div' :
                return num1/num2;
            default: return 0;
        }
    }
}
console.log(operation("add")(10,4));

// function addThisNumber(aNumber) {
    
//     function add(anotherNumber) {
//         return anotherNumber + aNumber;
//     }
//     return add;
// }

// var addTwelve = addThisNumber(12);
// console.log(addTwelve);
// addTwelve(100);

// var addHundred = addThisNumber(100);
// addHundred(11);

// addThisNumber(100)(20);
