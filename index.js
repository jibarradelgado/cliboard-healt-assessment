const {deterministicPartitionKey} = require("./dpk");

const number = 25631
const myObject = { partitionKey: number}
console.log(deterministicPartitionKey(myObject))