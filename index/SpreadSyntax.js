function sum(x,y,z){
    return x +y +z;
}
let num = [1,2,3];
console.log(sum(...num))
let a = [1,2];
a.push(...num);
console.log(a)
