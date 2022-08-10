// Callbacks

// <-----------------------------------------------------EXAMPLE 1---------------------------------------------------------->

//visiting hotel --> enterning -> order food -> preparation of food -> delivered to the table -> eating -> paying bill

//
// function prepareFood(){
//     setTimeout(() =>{
//         console.log("food is prepared");
//     },10000);
// }

// function eatFood(){
//     setTimeout(()=>{
//         console.log("Eating food");
//     },5000);
// }

// function hotelvisit(){
//     console.log("Entering into hotel");
// console.log("ordered roti with chicken");
// console.log("food is getting prepared");
// prepareFood();
// console.log("delivered to the table");
// eatFood();
// console.log("paying bill");
// }

// hotelvisit();

// output of above 
// Entering into hotel
// ordered roti with chicken
// food is getting prepared
// delivered to the table
// paying bill
// Eating food
// food is prepared

// now i need to mak ths program wait
// function prepareFood(){
//     setTimeout(() =>{
//         console.log("food is prepared");
//         console.log("delivered to the table");
//     },10000);
// }

// function eatFood(){
//     setTimeout(()=>{
//         console.log("Eating food");
//         console.log("paying bill");
//     },5000);
// }

// function hotelvisit(){
//     console.log("Entering into hotel");
// console.log("ordered roti with chicken");
// console.log("food is getting prepared");
// prepareFood();
// eatFood();

// }

// hotelvisit();

// output
// Entering into hotel
// ordered roti with chicken
// food is getting prepared
// Eating food
// paying bill
// food is prepared
// delivered to the table

// now after only 10 sec the food sould be start eaten for tis we use a function startEating
// function prepareFood(startEating){
//     setTimeout(() =>{                      //prpareFood is HOF
//         console.log("food is prepared");
//         console.log("delivered to the table");
//         startEating();
//     },10000);
// }

// function eatFood(){
//     setTimeout(()=>{
//         console.log("Eating food");
//         console.log("paying bill");
//     },5000);
// }

// function hotelvisit(){
//     console.log("Entering into hotel");
// console.log("ordered roti with chicken");
// console.log("food is getting prepared");
// prepareFood(eatFood)   //eatFood is callback function --> calling back a function after some period of time is callback function


// }

// hotelvisit();






// <-----------------------------------------------------EXAMPLE 2---------------------------------------------------------->

