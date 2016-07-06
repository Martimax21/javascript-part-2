
// Create a constructor function called Person that can create new persons. It takes firstName and 
// lastName as arguments, and assigns them to the new object. In addition to that, the constructor 
// function will assign each person an emails property that will be an empty array.
function Person(firstN,lastN){
    this.firstName = firstN;
    this.lastName = lastN;
    this.emails = [];
}
// Create a constructor function called Email that can create a new email address. It takes address 
// and type as arguments. It will assign address to the new object. For type, check if it's in the 
// list (work, home, other). If it's not in the list, set the type to "other".

function Email(address,type){
    this.address = address;
    if (type === "work" || type ==="home" || type ==="other"){
        this.type = type;
    }
    else {
        this.type = "other";
    }
}
// Add an addEmail function to the prototype of Person. This function will be available to all objects
// created using new Person. The addEmail function should take an email address and type as arguments, 
// call the Email constructor to create a new email object, then push that email object to the emails 
// of the person.Finally test your code by creating a person and giving them a home and work email.