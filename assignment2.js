                                //1) Difference between var, let, and const

console.log("------------------Using Var--------------------\n");                        
//var
// Scope : Works inside a function 
// Re-declaration : Allowed
// Re-assignment : Allowed
Example :
var password = "Hashu";
console.log("Before Re-declaration : "+password); 
// Outputs: Hashu
{
var password="Hashwanth";
console.log("After Re-declaration : "+password);
} 
//Output : Hashwanth
//If you mistakenly declare var password again, it overwrites the previous value without warning.
//This can cause bugs, especially in large programs
//Now in this case we Can use "Let" or "const"



console.log("------------------Using Let--------------------\n");

// Scope : Works inside a Block {} 
// Re-declaration : Not Allowed
// Re-assignment : Allowed
// Example :
let new_password = "Hashu";
console.log("Before Re-Assignement : "+new_password);
new_password="Hashwanth";
console.log("After Re-Assignment : "+new_password);
//but here we still change the value by re-assign to make it Constant Use Const 


console.log("------------------Using Const------------------\n");
// Scope : Works inside a Block {}
// Re-declaration : Not Allowed
// Re-assignment : Not Allowed
// Example :
const passwords = "Hashu";
console.log("Before Re-Assignment : "+ passwords);
// Outputs: Hashu
// password = "Hashwanth"; // This will throw an error
// console.log("After Re-Assignment : "+ passwords);
// Outputs: TypeError: Assignment to constant variable.
//If you want to change the value of a constant, you can reassign it to a new
// constant, but you can't change the value of the original constant.
// password = "Hashwanth";
// console.log(password); // Outputs: Hashwanth

                            //2) primitive and reference data types
console.log("------------------primitive and reference data types------------------\n");
/*primitive DataTypes:javaScript is a Dynamically Typed language which means the dataTypes
are Determined at runtime based on the type of values we assign */
console.log("------------------primitive data types------------------\n");
//1) Number 
let a=5;
console.log(a+" is a "+typeof a +" datatype"); // Outputs: 5
// Here 5 is assigned to "a" so "a" becomes number datatype

// 2) String-collecetion of characters enclosed in quotes.
let b="String";
console.log(b+" is a "+typeof b +" datatype"); // Outputs: String is a string datatype
// Here "String" is assigned to "b" so "b" becomes string datatype.

// 3) Boolean-represents a logical value (true or false).
let c=true;
console.log(c+" is a "+typeof c +" datatype"); // Outputs: true is a boolean datatype
// Here true is assigned to "c" so "c" becomes boolean datatype.
// 4) Null
// 5) Undefined
// 6) Symbol

console.log("------------------Reference data types------------------\n");//reference DataTypes:
//1) Array-collection of hetrogenius datatypes with a single variable name is called array
console.log("------------------Array------------------\n");
let d=[1,2,3];
console.log(d+" is a "+typeof d +" datatype"); 
// Here [1,2,3] is assigned to "d" so "d" becomes Array
//2) Object-An object in JavaScript is a collection of key-value pairs. It is used to store 
console.log("------------------Object-----------------\n");
// multiple related data under a single variable.
let e={name:"Hashu",age:25};
console.log(e+" is a "+typeof e +" datatype"); 
// Here {name:"Hashu",age:25} is assigned to "e" so " object

//3) Function -Function is a block of reusable code that performs a specific task.
console.log("-----------------Function-------------------\n");
let f=function s()
{
    console.log("Hello World")
};
console.log(f+" is a "+typeof f +" datatype\n"); // Outputs: function is a function datatype
// Here function(){console.log("Hello World")} is assigned to "f" so "f"
// becomes function datatype.


console.log("--------how they behave differently when assigned to a new variable--------\n");
console.log("--------Using Premetive data types---------------\n");
let num1 = 10;
let num2 = num1; // num2 gets a COPY of num1
num2 = 20; //
console.log("Changing num2 does NOT affect num1");
console.log("num1:", num1); // Output: 10 (Unchanged)
console.log("num2:", num2); // Output: 20
console.log("--------Using Reference data types---------------");
console.log("");
//Example
let arr11 = [1, 2, 3];
let arr22 = arr11; // arr2 now points to the same array as arr1
console.log("we Modifying arr2,now we expect arr1 won't change :\n");
arr22.push(4); // Modifying arr2
console.log("This is arr1 : "+arr11+"\nBoth arr11 and arr22 point to the same memory location, so modifying arr22 also affects arr11\n"); 
// Output: [1, 2, 3, 4]  (Unexpected change in arr1)
console.log("This is arr2 : "+arr22); // Output: [1, 2, 3, 4]

console.log("To make it unchange use separator oparator [...arr1]\n");
let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // arr2 now points to the same array as arr1
arr2.push(4); // Modifying arr2
console.log(" This is arr1 : "+arr1); // Output: [1, 2, 3, 4]  (Unexpected change in arr1)
console.log(" This is arr2 : "+arr2); // Output: [1, 2, 3, 4]

console.log("----------------- 3)determine the output of 3 + 4 * 5 - 6 / 2 && 10 || 5 -------------------\n");
/*
3)let result = 3 + 4 * 5 - 6 / 2 && 10 || 5;

Step 1: Operator Precedence
JavaScript follows "operator precedence", meaning certain operations are executed first.  
Here’s the precedence order for the given operators:  

1. Multiplication (*) and Division (/) (Same precedence, left to right)
2. Addition (+) and Subtraction (-) (Same precedence, left to right)
3. Logical AND (&&)
4. Logical OR (||)

Step 2: Solve Multiplication & Division First

3 + (4 * 5) - (6 / 2) && 10 || 5;

4 * 5 = 20
6 / 2 = 3

Now, the expression becomes:

3 + 20 - 3 && 10 || 5;

Step 3: Solve Addition & Subtraction

(3 + 20) - 3 && 10 || 5;

3 + 20 = 23
23 - 3 = 20

Now, the expression becomes:

20 && 10 || 5;

Step 4: Logical AND (&&)
20 && 10 
  && returns the second value "if both operands are truthy".
  20 is truthy, 10 is truthy → Result = 10

Now, the expression becomes:

10 || 5;

Step 5: Logical OR (`||`)
10 || 5`**  
|| returns the first truthy value.
10 is truthy → Final Result = 10


Final Answer: 10

*/
let num=3 + (4 * 5) - (6 / 2) && 10 || 5;
console.log(num);

console.log("----------------- 4)difference between null and undefined in JavaScript-------------------\n");


// 4)difference between null and undefined in JavaScript
/*
---NULL-------
1. Null is a primitive value in JavaScript.
2. It is used to represent the intentional absence of any object value.
3. It is often used to indicate that a variable has been explicitly set to nothing.
4. It is not the same as undefined.

------undefined-----
1. undefined is a primitive value in JavaScript.
2. It is used to represent the absence of any object value.
3. It is often used to indicate that a variable has not been initialized or has not been assigned
a value.
4. It is not the same as null.

----similarity-----
1. Both null and undefined are primitive values.
2. Both are used to represent the absence of any object value.
3. Both are often used to indicate that a variable has not been assigned a value.
4. Both are not the same as each other.

-----scenarios might you encounter each one----
*/
let n1=null;
console.log("When we assign to null : "+n1);

let n2;
console.log("When we dont assign anything : "+n2);


console.log("----------------- 5)swapping without a third variable-------------------\n");
let s1=5;
let s2=10;
console.log("Before Swapping s1 and s2 : "+ s1 ,s2 );

s1=s1+s2;   //5+10
s2=s1-s2;   //15-10
s1=s1-s2;   //15-5
console.log("After swapping s1 and s2 : "+s1,s2);

/*
-----------------6)resulting value and data type:----------

let result1 = "5" + 3;  = 53 =>string
let result2 = "5" - 3;  = 2  =>string is converted into number
let result3 = "5" * "3";= 15 =>string is converted into number
let result4 = 10 / "2"; = 5  =>string is converted into number
let result5 = 8 * null; = 0  =>NULL is converted into 0
let result6 = "five" * 2;    =>NaN Not a Number
let result7 = "5" == 5;    => true "==" just comapre values not type
let result8 = "5" === 5;   => false "===" compare both value and type
*/

console.log("----------------- 7)Expressions-------------------\n");

let str1 = "Hello"; 
let str2 = "World"; 
let nu1 = 5; 
let nu2 = 10; 
console.log("Concatenate str1 and str2 with a space between : ");
console.log(str1 + " " + str2);
console.log("Calculate the average of num1 and num2 : ");
console.log((nu1 + nu2) / 2);
console.log("Check if str1 is longer than str2 : ");
console.log(str1.length > str2.length);
console.log("Determine if num1 plus num2 is greater than the length of both : ");
console.log((nu1 + nu2) > (str1.length + str2.length));


console.log("----------------- 8)Conditions-------------------\n");
/*
Write conditions to check if a number is: 
Divisible by both 2 and 3 
Divisible by either 2 or 3 
Divisible by neither 2 nor 3 
*/
let nc=5;
if(nc%2==0 && nc%3==0)
{
    console.log("Divisible by both 2 and 3 ");
}
else if(nc%2==0 || nc%3==0)
{
    console.log("Divisible by either 2 or 3");
}
else
{
    console.log("Divisible by neither 2 nor 3");
}

/*
-----------------9)What is the value of each variable after these operations?------

let a = 10; 
let b = 3; 
let addition = a + b; =>13
let subtraction = a - b; =>7
let multiplication = a * b; =>30
let division = a / b; =>3.333
let modulus = a % b; =>1
let exponentiation = a ** b; =>1000
let increment = a++; =>11 //after execution value of "a" would be 11
let decrement = --b; =>2    //as it a pre decrement the answer is 2
*/


/*
--------------10) What will be the boolean result of these expressions?---- 
let p  =>true; 
let q  =>false; 
p && q =>false
p || q =>true
!p     =>false
!q     =>true
p && !q =>true 
*/

console.log("----------------- 11)Write code to access:-------------------\n");
/*
-------------11)Write code to access:----------
0 The person's name 
● Their favorite color 
● The property with numeric key 
● Their country 
● Try adding a new property "age" with value 25 
● Try changing their city to "Programton" 
*/
let person = 
{ 
    name: "Alex",
    "favorite color": "blue", 
    123: "numeric key", 
    address: 
    { 
    city: "Techville", 
    country: "Codeland" 
    } 
}; 
console.log("The person's name : "+person.name);
console.log("Their favorite color : "+person["favorite color"]);
console.log("The property with numeric key : "+person[123]);
console.log("Their country : "+person.address.country);
person.age=25;
console.log("Their age : "+person.age);
console.log("Their city : "+person.address.city);
person.address.city="Programton";
console.log("Their city after changing : "+person.address.city);


/*--------12)code----------
let x = 5; 
let y = x++; => it prints 5 because is it a post increment, the value of y will be 5 but x =6
let p = 5; 
let q = ++p; here q=6 and p =6
*/
/*
    13)Predict the final value of variable num after these operations:
    let num = 10; 
    num += 5;  = 15 
    num *= 2;  = 30
    num -= 7;  = 23 
    num /= 3;  = 7.66 
    num %= 4;  = 3.6
*/

/*
What will be output to the console? 
let greeting = "Hello"; 
let name = "JavaScript"; 
console.log(greeting + " " + name); => Hello JavaScript
greeting += "!"; 
console.log(greeting); => Hello!
*/

/*
15.   Calculate the result of these expressions: 
let result1 = 2 + 3 * 4;    =>14
let result2 = (2 + 3) * 4;  =>20
let result3 = 20 / 4 - 2;   =>3
let result4 = 20 / (4 - 2); =>10
let result5 = 5 + 10 / 2 * 3 - 1;   =>19 
*/
