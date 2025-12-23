function sum(a,b){
return a+b;
}
const h=sum(2,3)
console.log(h*5)// it helps to store the functions value
const func= (a,b)=>{// arrow function
    return a* b;
}
console.log(func(3,4))
// array
arr=["p","q","r"]
 arr.forEach((val,idx) => {
    console.log(val,idx);
});
//array print each of its square
brr=[2,14,6,7]
brr.forEach(num=>{
    console.log(num*num)
})
//map
let squarArr= brr.map(num=>{
    return num*num
})
console.log(squarArr)
//filter
let filterarr= brr.filter(num=>{
    return num%2!=0;
})
console.log(filterarr)
//output
let outputrarr= brr.reduce((res,curr)=>{
    return res+curr;
})
console.log(outputrarr);
// to find the greatest number in the arr
let greatestarr= brr.reduce((res,curr)=>{
    return res>curr? res:curr;
})
console.log(greatestarr);
//ques: given array of marks of students . Filter out of marks that scored 90
a=[56,54,93,60,93]
let sixtymarks=a.filter((num,idx)=>{
    return num>90
    return idx  

})
console.log(sixtymarks)
//take a number n as input from user.create an arr 1-n
//use reduce method to find sum of all number in an arr
//use redure to find the product of all numbers in an arr
const prompt = require("prompt-sync")();
let numr=  prompt("Enter the number n");
let n=Number(numr)
let b=[];
for(i=1;i<n;i++){
    b.push(i);
}
let sumb=b.reduce((prev,curr)=>{
    return prev+curr;
})
let prodb=b.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(sumb);
console.log(prodb);
