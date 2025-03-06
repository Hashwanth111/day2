console.log("----------1) prints numbers from 1 to 5 -------------");
console.log();
console.log("printing Numbers from 1 to 5 in console using for loop : ");

for(let a=1;a<=5;a++)
{
    console.log(a);
}

//2)Using while loop 5 to 20
console.log("----------2) Using while loop 5 to 20 -------------");
console.log();
console.log("printing Numbers from 5 to 20 in console using while loop : ");
let b=5;
while(b<=20)
{
    console.log(b);
    b++;
}

//3)Using  do...while
console.log("----------3) Using do...while to print 'Hello' -------------");
console.log();
let i=1;
do
{
    console.log(`${i} ${"Hello"}`);
    i++;
}
while(i<=15)

//4) use a for...in
console.log("----------4)display each student's name and score. using for..in -------------");
console.log();
let student = 
{ 
    Sushri: 50, 
    Rishi: 49,
    Hashu:45 
}; 
//here for...in loop use key as a temp variable until the for loop works
for(key in student)
{
    console.log(`${key} : ${student[key]}`);
}


//5) use a for...of
console.log("----------5)displaying fruits from array using for..of -------------");
console.log();
console.log("Printing fruits from the array using for...in");

let fruits=["apple","banana","waterMalon","jackfruit"]
for(element of fruits)
{
    console.log(element);
}

//Medium
console.log("----------6)array of strings -------------");
console.log();
let arr = ["Hashwanth","Hashu"]
let size=0;
for( element of arr)
{
    size+=element.length;
    console.log(`${element}`);
}
console.log(`Total number of characters across all strings : ${size}`);

console.log("----------7)Guessing random number -------------");
console.log();
const gu=10;
if(gu < 0)
{
    console.log("Enter a valid number between 1 to 100");
}
else
{
    let i=1;
    do{
        if(gu===i)
        {
            console.log(`The number is ${i}` );
            break;
        }
        i++;
    }while(i<=100)
}
//Divisibe by 3 and 5 will be skipped
console.log("----------8)Divisibe by 3 and 5 will be skipped -------------");
console.log();
for(let d=1;d<=100;d++)
{
    if(d%3==0 && d%5==0)
    {
        continue;
    }
    console.log(d);
}


console.log("----------9)Formating two Arrays using for loop -------------");
console.log();
const fruit = ["Apple","Banana","Mango"];
let prices = [120, 30, 90]
for(element of fruit)
{  
    console.log(`${element} : ${prices[fruit.indexOf(element)]}`);   
}


console.log("----------10)Two arrays similar elements-------------");
console.log();
let number1 = [2,3,4,87];
let number2 = [3,5,7,4,3];
console.log("The Similar elements in both the given arrays : ");
for(let i=0;i<number1.length;i++)
{
    for(let j=0;j<number2.length;j++)
    {
        if(number1[i]==number2[j])
        {
            console.log(number1[i]);
        }
    }
}

//Hard
//11)pattern
console.log("----------11)Patterns-------------");
console.log();
for(let i=1;i<=5;i++)
{
    let temp="";
    for(let j=1;j<=i;j++)
    {
        temp+="*"
    }
    console.log(temp);
    
}

//12)patterns
console.log("----------12)Patterns-------------");
console.log();
for(let i=1;i<=9;i++)
{
    temp=""
    w=1
    for(let j=9;j>=i;j--)
    {
        temp+=w;
        w++;
    }
    console.log(temp);
    // console.log(i);
}

//13)pattern
console.log("----------13)Patterns-------------");
console.log();
let n=4;
for(let i=0;i<n;i++)
{
    let tempu="";
    for(let j=0;j<(n-i-1);j++)
    {
        tempu+=" "
    }
        tempu+="*" 
    if(i!=0)
    {
        for(let j=0;j<(2*i-1);j++) 
        {
            tempu+=" "
        }
        tempu+="*"
    }
    console.log(tempu); 
}
