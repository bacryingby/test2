// const fibonacci = require('./lib/fibonacci')
//console.log("hello word");
function isLeapYear(n){
   if(n%400==0){
        return true;
   }
   if(n%100==0){
       return false;
    }
    if(n%4==0){
        return true;
    }
    return false;
}
console.log("2000年是闰年:"+isLeapYear(2000));
console.log("1900年是闰年:"+isLeapYear(1900));
console.log("2009年是闰年:"+isLeapYear(2009));
console.log("2n008年是闰年:"+isLeapYear(2008));

const fibonacci=require('./lib/fibonacci')
//var len =20;
for(i=1;i<20;i++){
    console.log(fibonacci(i));
}