// function multi(a,b){
//     return a*b;
// }
// let sum1 = multi(5)
// console.log(sum1);
// let sum2 = multi(5,8)
// console.log(sum2)
// function multi(a,b = 2){
//     return a*b;
// }
// let sum1 = multi(5);
// console.log(sum1);
// let sum2 = multi(5,10)
// console.log(sum2)
class geek{
    constructor(a,b = 3) {
        console.log(a*b)
    }
}
let obj1 = new geek(5);
let obj2 = new geek(5,4);
