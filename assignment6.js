// 1. Array double
console.log("----------1)Array double-------------");
console.log();
let arr1 = [1,2,3,4,5];
console.log("Original array arr1: ", arr1);
let a =(arr1)=>{
    let arr2=[];
    for(let i=0;i<arr1.length;i++)
    {
        arr2[i]=arr1[i]*2;
    }
    console.log("The doubled Array : ",arr2);
}
a(arr1);

// 2.Array of mixed values
console.log("----------2)Array of mixed values-------------");
console.log();
let mixArr1=[1,"Hashu",true,"Rishi","Sush",];
console.log(mixArr1);
let ma = (mixArr1) =>
{
    let strArr=[];
    // let count=-1;
    for(let i=0;i < mixArr1.length;i++)
    {
        if(typeof mixArr1[i]==="string")
        {
            // strArr[++count]=mixArr1[i];
            strArr.push(mixArr1[i]);
        }
    }
    console.log(strArr);
}
ma(mixArr1);

//3)Number of properties in an Object
console.log("----------3)Number of properties in an Object-------------");
console.log();
let obj = { name: "John", age: 30, city: "New York" };
let count1=0;
for(key in obj)
{
    count1++;
}
console.log("Number of properties in the object: ",count1);
// let l = Object.keys(obj).length;
// console.log(l);

//4
console.log("---------4)Object Merge-------------");
console.log();
let obj1={ a: 1, b: 2 }
let obj2={ b: 3, c: 4 };
// let MergeM=(obj1,obj2)=>
// {
//     return {...obj1,...obj2};
// }
// console.log(MergeM(obj1,obj2));
let MergeM=(obj1,obj2)=>
{
    let obj3={};
    for(let n in obj1)
    {
        obj3[n]=obj1[n];
    }
    for(let n in obj2)
    {
        obj3[n]=obj2[n];
    }
    console.log("After mering Two objects"+obj3);
    
}
MergeM(obj1,obj2);

//5)value from a nested object using a string path
console.log("---------5)value from a nested object using a string path-------------");
console.log();
let Nobj={ 
    user:{
        name: "Alice",
        age:25
    }
}
console.log(Nobj.user.name);

//6 reverses a string
console.log("---------6)t reverses a string-------------");
console.log();
let str="Hello";
// let arr=str.split("");
// let l=arr.length;
// let Newarr2=[];
// let count2=-1;
// for(let i=l;i>=0;i--)
// {   
//     count2++;
//     Newarr2[count2]=arr[i];
// }
// console.log(Newarr2.join(""));
let Newstr="";
for(let i=str.length-1;i>=0;i--)
    {
        Newstr+=str[i];
    }
    console.log(Newstr);
//7)String comparison

console.log("---------7)String comparison-------------");
console.log();
let str11="aaabbb";
let comp="";
let ccount=1;
// str11=str11.sort;
let com = ()=>{
    for(let i=0;i<str11.length;i++)
    {
        if(str11[i]===str11[i+1])
        {
            ccount++;
        }
        else{
            comp=comp+str11[i]+ccount;
            ccount=1;
        }
    }
    console.log(comp); 
}
com(str11);


//8)double
console.log("---------8)double-------------");
console.log();
let Input= [5, 10,15,3];
let Input1=[];
let s=0;
let double = (arr) => {
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i]>=10)
        {
            Input1.push(arr[i]*2);
            s+=arr[i]*2;
        }      
    }
    console.log(Input1);
    console.log(s);
}
double(Input);

//9)a Date object 
console.log("---------9)A Date object-------------");
console.log();
let date = new Date(2023, 2, 15);
let Da=date.getDate();
let Mn=(date.getMonth()<10)?"0"+date.getMonth():date.getMonth();
let Yr=date.getFullYear();
console.log(`${Yr}-${Mn}-${Da}`);


//10)generates a random integer
console.log("---------10)generates a random integer-------------");
console.log();
// let r=(Math.random()*5)+5;
// console.log(Math.round(r));
let ran=(min,max)=>{
    let r =Math.random()*(max-min)+min;
    console.log(Math.round(r));
}
ran(5,10)



