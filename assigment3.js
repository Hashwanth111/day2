
let prompt=require("prompt-sync")();
console.log(
  "---------------------Conditional Statements----------------------"
);
console.log(" ");
console.log("----------1) output of the following code :------------ \n");
//Explanation----
console.log(
  "->Here the score=75 will be compared with the first if condition (75 > 90).\n  it will be false and exit if and check elseif loop"
);
console.log(
  "->The else-if(score >= 80) will also get failed where score is 75"
);
console.log(
  '->The else-if condition will be executed where score is 75 grade will be assigned as "c"\n'
);
console.log("->The grade will printed and it will enter ternary operator ");
console.log(
  '->The Ternary operator is also failed so it will "Keep working hard" '
);

let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(grade);
if (grade !== "F" ? score > 80 : false) {
  console.log("Excellent performance");
} else {
  console.log("Keep working hard");
}

console.log(" ");
console.log(
  "----------2)Output of the following code in each console :--------- \n"
);
console.log("");
//Explanation----
let authenticated = true;
let premium = false;
let admin = false;
console.log(
  "() Has highest priority so first it will check for () and perform || operation "
);
console.log(
  "So premium and admin is false so it will return false and now it will be checked with authenticated"
);
console.log(
  "authenticated is true but the (premium || admin) is false so it will return Limited Access "
);
console.log(
  authenticated && (premium || admin) ? "Full Access" : "Limited Access"
);
authenticated = false;
console.log(
  "() Has highest priority so first it will check for () and perform || operation "
);
console.log(
  "So premium and admin is false so it will return false and now it will be checked with authenticated"
);
console.log(
  "authenticated is flase and the (premium || admin) is false so it will return Limited Access "
);
console.log(
  authenticated && (premium || admin) ? "Full Access" : "Limited Access"
);
authenticated = true;
premium = true;
console.log(
  "() Has highest priority so first it will check for () and perform || operation "
);
console.log(
  "So premium is true so it will return true and now it will be checked with authenticate"
);
console.log(
  "authenticated is true and the (premium || admin) is true so it will return Full access "
);
console.log(
  authenticated && (premium || admin) ? "Full Access" : "Limited Access"
);

console.log(" ");
console.log(
  "----------3)Output of the following code in each console :--------- \n"
);
console.log("");
//Explanation----
console.log(
  "Check if temperature is greater than 30,So it will fail the outer if-condidtion so it will enter elseif "
);
console.log(
  "Temperature is > 20 so it is true so the execution will enter elseif block"
);
console.log(
  "Humidity greater > 70 && precipitation > 50 ,so 'Expect rain soon' will be printed"
);
let temperature = 25;
let humidity = 80;
let precipitation = 60;
let result;
if (temperature > 30) {
  if (humidity > 90) {
    result = "Stay indoors";
  } else if (precipitation > 80) {
    result = "Take an umbrella";
  } else {
    result = "Enjoy the warm weather";
  }
} else if (temperature > 20) {
  if (humidity > 70 && precipitation > 50) {
    result = "Expect rain soon";
  } else if (humidity <= 70 && precipitation <= 50) {
    result = "Perfect weather";
  } else {
    result = "Changeable conditions";
  }
} else {
  result = "Bring a jacket";
}
console.log(result);

console.log(" ");
console.log(
  "----------4)Output of the following code in each console :--------- \n"
);
console.log("");
console.log(
  "\n\nExplanation:" +
    "\n1. userAge is 19, which means it satisfies (userAge >= 18), " +
    "so message = 'Adult content accessible'." +
    "\n2. Since isSubscribed is true, we enter the second if (isSubscribed) block." +
    "\n3. The condition (userAge < 18 && !hasParentalConsent) is false (since 19 >= 18), " +
    "so we skip that block." +
    "\n4. The else part executes: message += ' with premium features', " +
    "making it 'Adult content accessible with premium features'." +
    "\n5. Final output: 'Adult content accessible with premium features'."
);
let userAge = 19;
let hasParentalConsent = false;
let isSubscribed = true;
let message;
if (userAge >= 18) {
  message = "Adult content accessible";
} else if (userAge >= 13) {
  if (hasParentalConsent) {
    message = "Teen content accessible with consent";
  } else {
    message = "Parental consent required";
  }
} else {
  message = "Content not accessible";
}
if (isSubscribed) {
  if (userAge < 18 && !hasParentalConsent) {
    message = "Subscribe status pending parental approval";
  } else {
    message += " with premium features";
  }
}
console.log(message);

console.log("");
console.log("----------5)Output of the following code in each console :--------- \n");
console.log("");

console.log(
    "\n\nExplanation:" +
    "\n1. Initial values: a=5, b=10, c=15" +
    "\n2. a < b is true, so we enter the first if block." +
    "\n3. b < c is also true, so we update a = 10." +
    "\n4. Since a < c (10 < 15) is true, we update b = 15." +
    "\n5. Since b > a (15 > 10) is true, we append 'Path 1 ' and update c = 10." +
    "\n6. Checking final conditions: a == 10 && b == 15 is true, so 'Condition X met' is added." +
    "\n7. Final result: 'Path 1 Condition X met'" 
);
let a = 5,
  b = 10,
  c = 15;
let res = "";
if (a < b) {
  if (b < c) {
    a = b;
    if (a < c) {
      b = c;
      if (b > a) {
        res += "Path 1 ";
        c = a;
      }
    }
  } else {
    res += "Path 2 ";
    c = a;
  }
} else {
  res += "Path 3 ";
  a = c;
}
if (a == 10 && b == 15) {
  res += "Condition X met";
} else if (a == 5 && c == 5) {
  res += "Condition Y met";
} else {
  res += "No conditions met";
}
console.log(`a=${a}, b=${b}, c=${c}`);
console.log(res);

console.log("");
console.log("----------6)Two input numbers from the input Prompt and console the greatest number:--------- \n");
console.log("");

let num1=prompt("Enter number 1 : ")
let num2=prompt("Enter number 2 : ")
// let num1=10;
// let num2=5;
if (num1>num2) {
    console.log("Number 1 is greater than number 2 :" +num1);  
}
else{
    console.log("Number 2 is greater than number 1 :" +num2);
    
}

console.log("");
console.log("----------7)Three input numbers from the input Prompt and console the greatest number:--------- \n");
console.log("");

// let one=prompt("enter number1 ")
// let two=prompt("enter mumber2 ")
// let three=prompt("enter number3 ")
let one=10;
let two=5;
let three=15;
if (one>two && one>three)
     {
        console.log("Number 1 is greater than number 2 and 3 :" +one);
    }
    else if (two>one && two>three)
    {
        console.log("Number 2 is greater than number 1 and 3 :" +two);  
    }
    else
    {
        console.log("Number 3 is greater than number 1 and 2 :" +three);
    }

    console.log("");
    console.log("----------8)Voting--------- \n");
    console.log("");

// let age=prompt("Enter age : ")
let age=18;
if (age>=18 && age<=90)
    {
       console.log("You are eligible to vote");
    }
else
    {
        console.log("You are not eligible to vote");
    }

console.log("");
console.log("----------9)difference between null and undefined  --------- \n");
console.log("");
/*
    NULL:
    Null is a primitive value that represents the intentional absence of any object value. It is a special
    value that is used to indicate that a variable has not been assigned a value. It is not
    the same as 0 or an empty string. It is a keyword in JavaScript and is often
    used to represent the absence of a value.
    We are Explicitly assign this.
*/
let x;
console.log(x); // undefined (variable declared but not assigned)

/*
    undefined
    undefined is a primitive value that represents an uninitialized variable or a variable that has not been assigned a
    value. It is not the same as null. It is a property of the global object in
    JavaScript and is often used to represent the absence of a value.
    We are implicitly assign this.
*/
let user = null;
console.log(user); // null (intentionally assigned)

console.log("");
console.log("----------11)if age is greater than 18 AND hasLicense is true Can a person drive? --------- \n");
console.log("");
let age1=20;
let hasLicense=true;
if (age1>18 && hasLicense)
    {
        console.log("Yes, you can drive");
    }
    else
    {
        console.log("No, you can't drive");
    }

console.log("");
console.log("----------12) --------- \n");
console.log("");       
let scor = 85;
let attendance = 75;
let extraCredit = true;
if ((scor > 80 && attendance > 80) || extraCredit) {
    console.log("Student passes");
} else {
    console.log("Student fails");
}


console.log("");
console.log("----------13)Age --------- \n");
console.log("");
let agee = 25;
if (agee < 13)
{
    console.log("You are a child");
}
else if (agee >= 13 && agee <= 19)
{
    console.log("You are a teen");
}
else
{
    console.log("You are an adult");
}
console.log("");
console.log("----------15)temp --------- \n");
console.log("");
let temperaturee=35;
let isHot;  
if(temperaturee>30)
{
    isHot=true;
}





