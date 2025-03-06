            // Creating var variable and assining them my Favoriate color,name and number

console.log(" ");
console.log("-----------1)Variables var---------------");
console.log(" ");
var favoriteColor="blue";
var favoritenNumber=26;
var favoriteName="Rishi";

// printing them using console.log() 

console.log("My Favorite Color : "+favoriteColor);
console.log("My Favoriate Number : "+favoritenNumber);
console.log("My Favoriate Name : "+favoriteName);

// printing them using console.table() in table format

console.table([
    favoriteColor,favoritenNumber,favoriteName
])


                                        // using let 
console.log(" ");
console.log("-----------Variables Let---------------");
console.log(" ");
// Creating let variable and assining them my Favoriate color,name and number

let favoriteColor1="black";
let favoritenNumber1=21;
let favoriteName1="sushritha";

// printing them using console.log() 

console.log("My Favorite Color : "+favoriteColor1);
console.log("My Favoriate Number : "+favoritenNumber1);
console.log("My Favoriate Name : "+favoriteName1);

// printing them using console.table() in table format

console.table([
    favoriteColor1,favoritenNumber1,favoriteName1
])

console.log(" ");
console.log("-----------Variables const---------------");
console.log(" ");
                                            // using const
// Creating var variable and assining them my Favoriate color,name and number

const favoriteColor2="white";
const favoritenNumber2=2;
const favoriteName2="Hashu";

// printing them using console.log() 

console.log("My Favorite Color : "+favoriteColor2);
console.log("My Favoriate Number : "+favoritenNumber2);
console.log("My Favoriate Name : "+favoriteName2);

// printing them using console.table() in table format

console.table([
    favoriteColor2,favoritenNumber2,favoriteName2
])


                                                    //2)DataTypes:
console.log(" ");
console.log("-----------2) Data Types---------------");
console.log(" ");
                            
// "42"=string 
// 42 =number
// true =Boolean
// undefined =undefined
// ["apple", "banana"] =Array
// null =Null

// // By using typeof() we can say which Data Type it belongs to

console.log("\"42\"This is a "+ typeof("42")+" Data Type");
console.log("42 This is a "+ typeof(42)+" Data Type");
console.log("true This is a "+ typeof(true)+" Data Type");
console.log("undifined This is a "+ typeof(undefined)+" Data Type");
console.log("\"[\"apple\",\"banana\"]\"This is a "+ typeof(["apple", "banana"])+" Data Type");
console.log("This is a "+ typeof(null)+" Data Type");


                                            //3)Numbers
console.log(" ");
console.log("-----------3)NUmbers---------------");
console.log(" ");

let number1=15;
let number2=10;

// The sum of number1 and number2 is 
console.log("The sum of "+ number1+" and "+number2 +" is :"+ (number1 + number2));

// The difference between number1 and number2 is 
console.log("The difference between "+ number1+" and "+number2 +" is :"+ (number1 - number2));

// The product of number1 and number2 is 

console.log("The Product of "+ number1+" and "+number2 +" is :"+ number1 * number2);

//The division of number1 and number2 is
// "/" operator gives integer division()
console.log("The Division of "+ number1+" and "+number2 +" is :"+ (number1 / number2));

//The modulardivison operator is "%" (reminder)
console.log("The Modular Division of "+ number1+" and "+number2 +" is :"+ (number1 % number2));



                                                //4) Strings
console.log(" ");
console.log("-----------4)Strings---------------");
console.log(" ");

let firstName="Hashwanth";
let lastName="Boosa";
// by using concatiante operator +
console.log(firstName+" "+lastName);

                                                // 5)Boolean 

console.log(" ");
console.log("-----------5)Boolean---------------");
console.log(" ");
let isJavaScriptFun = true;
let isCodeHard = false;
let isLearning =true;

// using AND (&&) operator
console.log("Using AND Operator :"+(isJavaScriptFun && isCodeHard));
// using OR (||) operator
console.log("Using OR operator :"+(isCodeHard || isLearning));


console.log(" ");
console.log("-----------6)Arrays---------------");
console.log(" ");
// 6)Arrays

let array=["iceceam","chicken","biryani"];
console.log(" First food of my array : "+array[0]);
console.log(" Items are in my array : "+array.length);
array[3]="chicken65";
// adding food item
console.log(" Adding one more food to my array : "+array[3]);

                                            //7)Simple Math



console.log(" ");
console.log("-----------7)Simple Math---------------");
console.log(" ");
let temparature = 35;
// adding 5 to it
temparature += 5;
console.log("By adding 5 to the Teamparature :"+temparature);
//subratcing 2
temparature-=2;
console.log("By Subracting 2 from the Teamparature :"+temparature);
//multiply by 3
temparature*=3;
console.log("By Multiply 3 to the Teamparature :"+temparature);
//Divide by 2
temparature/=2;
console.log("By Dividing 2 from the Teamparature :"+temparature);

//8)Variable Names
console.log(" ");
console.log("-----------8)Variable Names ---------------");
console.log(" ");
// - user name  -  invalid
// - _firstName -  valid
// 3colors      -  invalid
// my-variable  -  invalid
// - $price     -  valid
// - let        -  invalid

                                        //9) Comments
console.log(" ");
console.log("-----------9)Comments---------------");
console.log(" ");

// single line comment 
// JavaScript allows us to work with variables, data types, functions, and more.

// Multi line comment 
/*
So far, I've learned about variables (`var`, `let`, `const`), 
data types (numbers, strings, booleans, arrays, etc.), 
operators, console methods, and basic mathematical operations.
*/


                                        //10)Data Type Checking


console.log(" ");
console.log("-----------10)Data Type Checking---------------");
console.log(" ");

console.log(" \"42\"This is a "+ typeof("42")+" Data Type\n");
console.log(" 42 This is a "+ typeof(42)+" Data Type\n");
console.log(" \"true\" This is a "+ typeof(true)+" Data Type\n");
console.log(" undifined This is a "+ typeof(undefined)+" Data Type\n");
console.log(" \"[\"apple\", \"banana\"]\"This is a "+ typeof(["apple", "banana"])+" Data Type\n");
console.log("\"Null\" This is a "+ typeof(null)+" Data Type");


                        //11) console in three different ways.


console.log(" ");
console.log("-----------11)console in three different ways---------------");
console.log(" ");

console.log( "Hello, JavaScript!\n");
// using warn 
console.warn( "Hello, JavaScript!\n");
//using error
console.error( "Hello, JavaScript!");


                                    //12). Variables and Numbers 


console.log(" ");
console.log("-----------12)Variables and Numbers---------------");
console.log(" ");

let num1=10;
let num2=20;
// adding two numbers
console.log("adding two numbers :"+(num1+num2));
// subtracting two numbers
console.log("subtracting two numbers :"+(num1-num2));
// multiplying two numbers
console.log("multiplying two numbers :"+(num1*num2));
// dividing two numbers
console.log("dividing two numbers :"+(num1/num2));
console.log("dividing a number by 0 :"+(num1/0));
// In JavaScript, dividing by zero doesn't crash the program.
// Instead, it returns Infinity (or -Infinity for negative numbers).