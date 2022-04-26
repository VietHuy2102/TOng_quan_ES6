const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
]
// let totalMachineValue = inventory.filter((e) =>
//          e.type === "machine"
//
// )
// let temp = totalMachineValue.map((e) => e.value)
// console.log(temp)
// console.log(totalMachineValue)
// let sum = temp.reduce((total, e) => total + e)
// console.log(sum)

let sum = inventory.filter(e => e.type==="machine").map(e => e.value).reduce((s,a)=>s+a);
console.log(sum)