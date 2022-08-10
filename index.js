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

// accessing github profile
// enter userid -> calling my database with userid -> gor the user data ->display the data in github page

// function readDataInDB(){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         }, 2000);
// }

// function displayDataOnScreen(){
//     console.log("returning the user data", {id:1, username: "sadhna"});
//     console.log("display the content in github page");
// }


// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB();
// displayDataOnScreen();
// }

// githubLogin();

// output
// Entering user id as 1
// clicking submit button
// returning the user data { id: 1, username: 'sadhna' }
// display the content in github page
// reading account data in database

// Now we have to use callback to work it properly

// function readDataInDB(display){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         display();
//         }, 2000);
// }

// function displayDataOnScreen(){
//     console.log("returning the user data", );
//     console.log("display the content in github page");
// }


// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB(displayDataOnScreen);
// }

// githubLogin();
// output
// Entering user id as 1
// clicking submit button
// reading account data in database
// returning the user data
// display the content in github page

// above program is printing in correct manner but it never gives the data, now i want to print the user data as well

// function readDataInDB(display){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         let user = {id:1, username: "sadhna"};
//         display(user);
//         }, 2000);
// }

// function displayDataOnScreen(userData){
//     console.log("returning the user data", userData );
//     console.log("display the content in github page");
// }


// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB(displayDataOnScreen);
// }

// githubLogin();
// output
// Entering user id as 1
// clicking submit button
// reading account data in database
// returning the user data { id: 1, username: 'sadhna' }
// display the content in github page


// To get all the repositories
// function readDataInDB(display){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         let user = {id:1, username: "sadhna"};
//         display(user);
//         }, 2000);
// }

// function displayDataOnScreen(userData){
//     console.log("returning the user data", userData );
//     console.log("display the content in github page");
//     getRepositories(); //it should be called after the data displayed on screen
// }
// function getRepositories() {
//     console.log("printing the repos")
//     console.log(['add', 'calculator', 'forms']);
// }

// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB(displayDataOnScreen);
// }

// githubLogin();
// output
// Entering user id as 1
// clicking submit button
// reading account data in database
// returning the user data { id: 1, username: 'sadhna' }
// display the content in github page
// printing the repos
// [ 'add', 'calculator', 'forms' ]




// now to get all the commits in the repos

// function readDataInDB(display){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         let user = {id:1, username: "sadhna"};
//         display(user);
//         }, 2000);
// }

// function displayDataOnScreen(userData){
//     console.log("returning the user data", userData );
//     console.log("display the content in github page");
//     getRepositories(); 
   
// }
// function getRepositories() {
//     console.log("printing the repos")
//     console.log(['add', 'calculator', 'forms']);
//     getCommits();  //it should be called after getting the repos
// }

// function getCommits(repos){
//     console.log('commits', ['initial commit', 'add function'])
// }

// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB(displayDataOnScreen);
// }

// githubLogin();

// OR

// function readDataInDB(display){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         let user = {id:1, username: "sadhna"};
//         display(user);
//         }, 2000);
// }

// function displayDataOnScreen(userData){
//     console.log("returning the user data", userData );
//     console.log("display the content in github page");
//     getRepositories(); 
   
// }
// function getRepositories() {
//     console.log("printing the repos")
//     let repos = ['add', 'calculator', 'forms']
//     console.log(repos);
//     getCommits(repos[0]);  //it should be called after getting the repos
// }

// function getCommits(repos){
//     console.log('commits', ['initial commit', 'add function']) 
// }

// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB(displayDataOnScreen);
// }

// githubLogin();

// output
// Entering user id as 1
// clicking submit button
// reading account data in database
// returning the user data { id: 1, username: 'sadhna' }
// display the content in github page
// printing the repos
// [ 'add', 'calculator', 'forms' ]
// commits [ 'initial commit', 'add function' ]

// OR making it with objects
// function readDataInDB(display){
//     setTimeout(() => {
//         console.log("reading account data in database");
//         let user = {id:1, username: "sadhna"};
//         display(user);
//         }, 2000);
// }

// function displayDataOnScreen(userData){
//     console.log("returning the user data", userData );
//     console.log("display the content in github page");
//     getRepositories(); 
   
// }
// function getRepositories() {
//     console.log("printing the repos")
//     let repos = ['add', 'calculator', 'forms']
//     console.log(repos);
//     getCommits(repos[1]);  //it should be called after getting the repos
// }

// function getCommits(repos){
//     let commits = {
//         add : ['initial commit', 'add function'],
//         calculator : ['initial', "design", 'addEventListener','give colors'],
//         forms : ['initial', 'forms UI', 'add functionality']
//     }
//     console.log('commits', commits[repos] )
    
// }

// function githubLogin(){
//     console.log("Entering user id as 1");
// console.log("clicking submit button");
// readDataInDB(displayDataOnScreen);
// }

// githubLogin();

// output
// Entering user id as 1
// clicking submit button
// reading account data in database
// returning the user data { id: 1, username: 'sadhna' }
// display the content in github page
// printing the repos
// [ 'add', 'calculator', 'forms' ]
// commits [ 'initial', 'design', 'addEventListener', 'give colors' ]








// calling functions again and again is not a good approach because it will create "CALLBACK HELL"
// callback hell means if i call 1 function,that function will call another function, that function will call another function and it will keep on going like this and it will become difficult for us to understand


// console.log('entering id and clicking');
// let id = 1
// let userData = getUserData(id); //4sec
// let repos = getRepositories(userData); // 3sec
// let commits = getCommits(repos)
// console.log(commits);

// the problem with above program is it wont wait, it will print undefined...inthis way all the funtions will break

// console.log('entering id and clicking');
// let id = 1
// let userData = getUserData(id); //4sec
// let repos = getRepositories(undefined); // 3sec
// let commits = getCommits(undefined)
// console.log(commits);

// the only problem with this is it is not waiting to make this wait we are learning about "ASYNCHRONOUS PROGRAMMING"
// to avoid this we use "PROMISES"
// PROMISES -> pending state, success state(), fail state();
// PROMISES -> pending state, success state(resolve()), fail state(reject());
// in js success = "RESOLVE" and fail = "REJECT"

// Syntax for promise
// let promise = new promise((resolve, reject) => {
//     // resolve
//     // reject
// })

// example1 
// let momsPromise = new Promise((resolve, reject) => {
//     resolve('collected all golds')
// });

// momsPromise.then((result) => console.log("climax", result));

// output
// climax collected all golds


// if we use set time out then also it will wait

// resolved case
// let momsPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('collected all golds')
//     }, 5000)
   
// });

// momsPromise.then((result) => console.log("climax: =>", result));

// output
// after 5 seconds it will print
// climax: => collected all golds

// rejected case
// let momsPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('collected all golds')
//         reject("killed by adheera");
//     }, 5000)
   
// });

// momsPromise.then((result) => console.log("climax: =>", result)); // this is a promise but we are not handling it so to handle itwe should use"CATCH"
// momsPromise
//     .then((result) => console.log("climax: =>", result))
//     .catch((error) => console.log(error));

// output
// killed by adheera

// both resolve and reject conditions simultaneously
// let momsPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('collected all golds')
//         reject("killed by adheera");
//     }, 5000)
   
// });

// momsPromise
//     .then((result) => console.log("climax: =>", result))
//     .catch((error) => console.log(error));
// output
// climax: => collected all golds

// im this case after seeing resolve it will get executed only, it will not go to reject ant the reject command will nver ever get executed
     

console.log("entering he user id", 1);

function getUserData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {id: id, username: "sadhna"};
            resolve(user);
        }, 5000);
    });
}

function getRepositories(userData){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let repos = {
                'sadhna' : ["add", "calculator", "forms"]
            }
        resolve(repos[username]);
    },3000)
        });    
}

function getCommits(repos){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let commits = {
                        add : ['initial commit', 'add function'],
                        calculator : ['initial', "design", 'addEventListener','give colors'],
                        forms : ['initial', 'forms UI', 'add functionality']
                    }
        resolve(commits[repos]);
    },2000)
        });
}

getUserData(1).then((username) => console.log(userData));