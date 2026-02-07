// Q6:Print the sum of the numbers using a loop from 1 to 100.
// Q7:Print all numbers from 1 to 50 that are divisible by 3.
// Q8:Ask the user for a number and print whether each number from 1 to that number is even or odd.
//Q9:Count how many numbers between 1 to 100 are divisble by both 3 and 5.

//Answer 6: 
// let sum = 0;
// for(let i=1; i<101 ; i++){
//     sum = sum + i;
// }
// console.log(sum);
// Answer 7:
// for(let i=1 ; i<51; i++){
//     if(i%3 ===0)
//     console.log(i);
// }
// Answer 8:
// let val = prompt("give me a number");
// for(let i = 1 ; i<=val; i++){
//     if(i%2 ===0){
//         console.log(`${i} is even`);
//     }
//     else{
//          console.log(`${i} is odd`);
//     }
// }
//Answer 9:
for(let i = 1; i<101;i++){
    if(i%3 === 0 && i%5===0){
        console.log(i);
        
    }
}


