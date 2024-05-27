let surf="surf";
let day=new Date();;

let sports= [surf, "skateBoard", "Break Dance"];

console.log(surf);
console.log(typeof surf);
console.table(sports);

for (const sport of sports){
    console.log(sport);
}

let number=42;
let number2= "42";
console.log(number==number2);
console.log(number===number2);

/*function getSport(index) {
    return sports[index];
}

const getSport = function(index) {
    return sports[index];
}*/

const getSport = (index => sports[index]);

const s = (function getSport(index){
    return sports[index]
})(1)

console.log(s);

console.log(getSport(2));