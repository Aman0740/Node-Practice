

// Asynchronous Programming
// Handle Asynchronous Data
// Asynchronous programming doesn't wait for anyone. If my starting section takes 0 seconds, my middle section takes 2 seconds, and my      ending section also takes 0 seconds, then the section that takes 0 seconds will print first, and at the end, the section that takes time will be printed.

// console.log("STARTING PART")

// setTimeout(()=>{
//     console.log("MIDDLE PART")
// },2000)

// console.log("ENDING PART")


// let a = 10;
// let b = 0;
// setTimeout(()=>{
//     let b = 20;
// },2000)

// console.log(a+b);

// Answer is 10. Because as i say Asynchronous programming doesn't wait for anyone.



// let a = 10;
// let b = 0;

// let waitingdata = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// waitingdata.then((data)=>{
//     b=data
//     console.log(a+b);
// })

// Answer is 40. Because we use promise to wait a Asynchronous programming to print a correct answer