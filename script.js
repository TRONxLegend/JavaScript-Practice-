// this:

// var obj = {
//     fname : "Manish",
//     age : 25,
//     fun : function () { 
//         console.log(this.fname);
//         console.log(this.age);
//     }
// }
// obj.fun(); 

// NEW KEYWORD
// function fun (){
//      let fname = "manish";
//      this.fname = fname;
// }
// var obj = new fun();
// console.log(obj.fname); 

//  CONSTRUCTOR
// function User (name) {
// this.name = name;
// }
// let person = new User("jack");
// console.log(person.name);

// FOR IN:
// let arr = [10,13,15,16];
// for (let ar in arr){
//     console.log(arr[ar]);
// }


// // FOR OFF
// let arr = [10,13,15,16];
// for(let ar in arr){
//     console.log(ar);
// }

// #MULTIDIMENTIONAL ARRAY
// let arr = [
// [10,13,15,16],
// [1,3,4,5],
// [2,78,90,7],
// ]
// console.log(arr);

// MULTIDIMENTIONAL ARRAY USING FOR OF:
// let arr = [
// [10,13,15,16],
// [1,3,4,5],
// [2,78,90,7],
// ]
// for(let ar of arr){
//     for(let el of ar){
//         console.log(el);
//     }
// }

// COPY AND SPREAD
// let arr1 = ["john",20,true];
// let arr2 = arr1.slice(0);
// arr1.push("manish");
// console.log(arr1);
// console.log(arr2);

// COPY AND SPREAD USING (......):
// let arr1 = ["john",20,true];
// let arr2 = [...arr1];
// arr1.push("manish");
// console.log(arr1);
// console.log(arr2);

// ARRAY DESTRUCTOR :
// let arr1 = ["man","manish","kallu"];
// let[item1,item2,...item3] = arr1;

// console.log(item1);
// console.log(item2);
// console.log(item3);
  
// FUNCTIO IN FUNCTION :
// function fun (){
//     console.log("i am function");   
//  function fun2(){
//     console.log("i am nested function");
//  }
//  fun2();
// }
// fun();

// LEXICAL SCOPE:
// function fun () {
//     var a =1;
//     console.log("i am function:" + a);
//     function fun2(){
//         console.log("i am nested function:" + a);
//     }
//     fun2();
// }
// fun();

// SETS:
// const arr = [1,2,3,4,5,6,7];
// console.log(arr);
// const S = new Set([1,2,3,4,5,6,7]);
// S.add(60);
// console.log(S);

// MAP:
// var map1 = new Map([[1,2,3,4,5,]
//  ,["apple","banana","mango","orange","grape"]
//  ,["red","yellow","green","orange","purple"]]);
//  console.log(map1);


// #RECURSION
// function printnumberRecursive(n){
//     if(n<=10){
//         console.log(n);
//   printnumberRecursive(n+1);
//     }
// }
// printnumberRecursive(1);


 // Factorial
// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1);
//     }
// }
// console.log(factorial(5));


// settimeout
// console.log("hello");
// setTimeout(() => {
//     console.log("hello ji");
// }, 1000);

// CALLBACK / CALLBACK HELL:
// function loaddata(callback){
//     setTimeout(() => {
//         console.log("load data");
//         callback();
//             }, 4000);
// }
// function readdata(callback){
//     setTimeout(() =>{
//     console.log("read data");
//     callback();
// },5000);
// }
// function writedata(){
//     console.log("write data");
// }
// loaddata(function(){
//     readdata(function(){ 
//     writedata();
//     });
// })
// promises:
// function loaddata(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("load data");
//         resolve();
//             }, 4000);
//         })            
//     }
// function readdata(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//     console.log("read data");
//     reject('not  fulfilled');
// },5000);
// })
// }
// function writedata(){
//     console.log("write data");
// }
// // loaddata(function(){
// //     readdata(function(){ 
// //     writedata();
// //     });
// loaddata().then(readdata).then(writedata).catch((err)=>{
//     console.log(err)
// })

// Proto:
// let obj ={
//     fname: "Ayush",
// };
// obj2 = Object.create(obj);
// obj2.Sname = "Singh";
// console.log(obj2);

// Prototype Using Class:
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//     }
// }
// let user = new Person("Ayush",19)

// user.greet();

// Inheritance:
// class Animal{
//     constructor(name){
//         this.name = name;
        
//     }
//     speak(){
//         console.log(`${this.name} is Barking.`);
//     }
// }
// class Dog extends Animal{
//      constructor(name){
//         super(name);
        
//      }
// }
// let breed = new Animal("Rio");
// breed.speak();


// TRy,Throw and Catch :
// function d(a,b){
//    try{
//     if(b==0){
//         throw new Error("Error: Division by zero");
//     }
//     else{
//         return a/b;
//     }
// }

//     catch(err){
//         console.log(err.message);
//     }
// }

// console.log(d(10,4));


// fetch API:

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data   => data.forEach(element => {
//     console.log(element.title);
//   }))
//   .catch(error => console.log('There has been a problem with your fetch operation: ' + error.message));