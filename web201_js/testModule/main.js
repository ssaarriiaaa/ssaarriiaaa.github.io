import {a,b} from "./module1.js"

console.log(a);
console.log(b());

// use module2
import {c as price, d} from  "./module2.js"
console.log(price);
console.log(d());