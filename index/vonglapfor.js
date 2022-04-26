function geeks(){
     console.log("for(;;)");
    for (let i = 0; i <= 10; i+=2) {
        console.log(i + ` `)
    }
}
geeks();
console.log("for...of");
for (let i of ["Ha noi",21,23123,true,false]) {
    console.log(i + ` `)
}
let obj = { name : `Huy`, age : 25, location : "HBT"};
for (let i in obj) {
    console.log(obj[i] + ``)
}

