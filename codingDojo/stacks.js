// Lets create our stack

------Empty array called dishes
let dishes = [] // our stack of dishes
// console.log("Before we stack the dishes:", dishes)


------variable created, string
let theDishes = "Grandmas dishes" // each character including spaces =  1 dish total of 15 dishes
// length = 15 total indexes = 14

// let theDishes = 'tacocat'
// let theDishes = 'taco cat'
// let theDishes = 'Sos'
// let theDishes = 'sos'

// console.log("Our Dishes: ", theDishes)

// create a for loop to go through the whole string and add the clean dishes to the pile


----- loop through an array and add clean dishes
for (var d = 0; d < theDishes.length; d++) {
    dishes.push(theDishes[d])
}
// console.log("Dishes are in a stack:", dishes)

// Grandmas wants to have party we need to set the table

let table = ''
// console.log("Our empty table: ", table)

-----if you put the dish on the table remove it from the dishes array
for (var d = 0; d < theDishes.length; d++) {
    table += dishes.pop()
}


// console.log("The table is set: ", table)
// console.log("All the dishes are out of the stack: ", dishes)

// Check to see if theDishes and table are a palindrome

racecar
------palindrome means same backwards or forwards
----- if table has the same dishes
----- when we put dishes on the table we are removing from the stack

----- dishes are washed and then stacked on the dish rack.dishes are removed from rack and placed on table
----- two stacks of dishes, one on table and one on rack
----- first half, and then second half backwards = palindrome
----- when removed from table you remove from the end of the array.when you put on dish rack you add to the front of the array

// if (table === theDishes) {
//     console.log(theDishes + " is a palindrome")
// }
// else {
//     console.log(theDishes + " is NOT a palindrome")
// }

----- let xyz = new Stack()
----- xyz.push("plate1")
----- create a class so we can instantiate a stack
// Creates a stack we are adding things a trunk
var Stack = function () {
    this.count = 0; //counting dishes
    this.storage = {}; //storing dishes in an object. plate matches some key ( key value pair)

    // Adds an item to the trunk
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }
    ----remove something from the stack.reduce count
    // Removes and returns the number of items in the trunk
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        else {
            this.count--;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }
    }
    ----more class methods that belong to this instance of class
//   the number of items in the trunk
    this.size = function () {
        return this.count;
    }

    // Returns the last item addied from the trunk
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

--- instantiate a instance of a stack
var myTrunk = new Stack();
--- log stuff to see what is happening with our stack
myTrunk.push(1);
console.log(myTrunk.peek());
myTrunk.push(2);
console.log(myTrunk.peek());
console.log(myTrunk.pop());
console.log(myTrunk.peek());
myTrunk.push("Grandmas Dishes");
console.log(myTrunk.size());
console.log(myTrunk.peek());
console.log(myTrunk.pop());
console.log(myTrunk.peek());

