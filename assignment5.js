//1)functions
console.log("----------1)functions-------------");
console.log();
//calledfunction
function welcome(namee){
    if(namee===undefined)
    {
        return ("welcome Guest!");
        
    }
    else
    {
        return (`welcome ${namee}!`);
    }
}
// calling the function
console.log(`calling with a parameter : ${welcome("Hashu")}`);
console.log(`calling without a parameter : ${welcome()}`);


// 2)functions calculateArea
console.log("----------2)functions calculateArea-------------");
console.log();
let calculateArea=(width, height)=> {
    return (width*height);
}
console.log("Enter Width and height :");
console.log(`Area of rectangle is ${calculateArea(5, 6)}`);

// 3)functions isEven
console.log("----------3)functions isEven-------------");
console.log();
const isEven= (numb)=>{
    if(numb%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log("If your Is Even it will print true else flase :");
console.log(isEven(10));
console.log(isEven(101));


// 4)function MAX
console.log("----------4)function MAX-------------");
console.log();
const Max=(number1,number2)=>{
    if(number1>number2)
        return number1
    else
        return number2
}
console.log(`The Maximum number amoung the given two numbers is : ${Max(10,5)}`);
console.log(`The Maximum number amoung the given two numbers is : ${Max(10,45)}`);


// 5)reverseString
console.log("----------5)reverseString-------------");
console.log();
const reverseString=(str)=>
{
    let reverse=" ";
    for(let i=str.length-1;i>=0;i--)
    {
        reverse=reverse+str[i];
    }
    return reverse;
}
let str="12345";
console.log(`The current string is : ${str}`);
let result=reverseString(str);
console.log(`The reverse of the string is : ${result}`);

// 6)Double
console.log("----------6)Double-------------");
console.log();
const double=(num)=>{
    return num*2
}
let num=10;
console.log(`The number is : ${num}`);
console.log(`The double of the number is : ${double(num)}`);

// 7)Quadruple
console.log("----------7)Quadruple-------------");
console.log();
const quadruple=(num)=>{
    return num * 4;
}
let qnum=10;
console.log(`The number is : ${qnum}`);
console.log(`The quadruple of the number is : ${quadruple(qnum)}`);


// 8)factorial
console.log("----------8)factorial-------------");
console.log();
const factorial=(num)=>{
    let fact=1;
    for(let i=num;i>0;i--)
        {
            fact=fact*i;
        }
        return fact;
    }
    let num1=5;
    //5*4*3*2*1=120
    console.log(`The factorial of ${num1} is : ${factorial(num1)}`);


// 9)Math    
console.log("----------9)Math-------------");
console.log();
const math = (ope,numb1,numb2) =>
{
    switch(ope)
    {
        case "add" : return (numb1+numb2);
        case "sub" : return (numb1-numb2);
        case "mul" : return (numb1*numb2);
        case "div" : return (numb1/numb2);
        default: return "Invalid operator";
    }
}
console.log(`The Result is :${math("add",5,4)}`);


// 10)IIFE
console.log("----------10)IIFE-------------");
console.log();
((arr)=>
{
    let res=0;
    for(let i=0;i<arr.length;i++)
        {
            res+=arr[i];
        }
    console.log(`The sum of the array is : ${res}`);           
})([10,20,30]);


// 11)createUser
console.log("----------11)createUser-------------");
console.log();
const createUser=(username,role)=>
{
    if(username===undefined)
    {
        return{
            'username':"user",
            'role':role
        };
    }
    else
    {
        return{
            'username':username,
            'role':role
        };
    }
}
let username;
let role="admin";
console.log(createUser(username,role));
let usernames="hashu";
let roles="admin";
console.log(createUser(usernames,roles));


// 12)Operator function
console.log("----------12)Operator function-------------");
console.log();

operator=(obj,n1,n2)=>{
   obj.r=n1+n2;
   return null;
}
let v={};
operator(v,5,4);
console.log(`The Sum of 2 numbers is : ${v.r}`);

// 13)IIFE Sum
console.log("----------13)IIFE Sum-------------");
console.log();
((n1,n2)=>{
     console.log(`The Product of the two numbers is :${n1*n2}`);
    
})(5,6);



