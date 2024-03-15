
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

const costPerGallon = 3;
const tripBudget = 175;
const totalDistanceTraveling = 1500;

const speed55 = 55;
const speed60 = 60;
const speed75 = 75;

const mpg55 = 30; //At 55 miles per hour you get 30 miles per gallon.
const mpg60 = 28; //At 60 miles per hour, you get 28 miles per gallon.
const mpg75 = 23; //At 75 miles per hour, you get 23 miles per gallon.

const gallonsUsedAt55mph = totalDistanceTraveling / mpg55; 
const gallonsUsedAt60mph = totalDistanceTraveling / mpg60;
const gallonsUsedAt75mph = totalDistanceTraveling / mpg75;

const fuelCostAt55mph = gallonsUsedAt55mph * costPerGallon;
const fuelCostAt60mph = gallonsUsedAt60mph * costPerGallon;
const fuelCostAt75mph = gallonsUsedAt75mph * costPerGallon;

const tripTimeAt55mph = totalDistanceTraveling / speed55;
const tripTimeAt60mph = totalDistanceTraveling / speed60;
const tripTimeAt75mph = totalDistanceTraveling / speed75;

const costInBudgetAt55pmh = fuelCostAt55mph < tripBudget;
const costInBudgetAt60mph = fuelCostAt60mph < tripBudget;
const costInBudgetAt75mph = fuelCostAt75mph < tripBudget;

console.log (`At 55mpg, you will need ${gallonsUsedAt55mph} gallons of gas. \
 It will cost $${fuelCostAt55mph} for fuel. \
 The trip will take ${tripTimeAt55mph} hours.\
 Will the cost be within our budget? ${costInBudgetAt55pmh}`);

 console.log (`At 60mpg, you will need ${gallonsUsedAt60mph} gallons of gas. \
 It will cost $${fuelCostAt60mph} for fuel. \
 The trip will take ${tripTimeAt60mph} hours.\
 Will the cost be within our budget? ${costInBudgetAt60mph}`);

 console.log (`At 75mpg, you will need ${gallonsUsedAt75mph} gallons of gas. \
 It will cost $${fuelCostAt75mph} for fuel. \
 The trip will take ${tripTimeAt75mph} hours.\
 Will the cost be within our budget? ${costInBudgetAt75mph}`);

 console.log (`Going at ${speed60}mph makes the most sense.`);