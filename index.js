console.log("hello world")

 var a=10
 var b=20
 var result=a+b
 console.log("total value",result);

 // primitive type
 var num1=10
 var num2=num1// re assign
 num1=20
 console.log("num1:",num1);
 console.log("num2:",num2);
 // reference type
 var renum1=[10]
 var renum2=renum1
 renum1[0] =20
 console.log("renum1:",renum1);
 console.log("renum2:",renum2);

 var age=17
 if(age>17){
    console.log('aduit');
 }
 else{
    console.log("children")
 }

 //elseif
var color="green"
if(color=="red"){
    console.log("stop");
}
else if (color=="yellow"){
    console.log("ready");
}
else if(color=="green"){
    console.log("Go");
}

 let age1 = 20;
 let hasID = true;

if (age1 >= 18) {
   console.log("You are an adult.");

   if (hasID) {
 console.log("You have an ID. You can enter.");
 } else {
 console.log("You need an ID to enter.");
 }

} else {
 console.log("you are not an adult");
}
//array

var list=[10,7,4,6,85,4]
console.log("array value:",list);
console.log("array 0 index value:",list[0]);

//object

var obj={
    name:"sathiyanarayanan",
    age:21,
    role:"MERN stack developer"
}

console.log("object value:",obj);
console.log("object role value:",obj.role);

// json

var studata=[
    {
        name:"sathiya",
        age:18,
        rol_num:2010
    },
    {
        name:"satna",
        age:18,
        rol_num:2020
    },
    {
        name:"sekar",
        age:18,
        rol_num:2030
    }
]

console.log("data:",studata);

// increment

for(var i=0;i<10;i++){
    console.log("decrement:",i);

}

var student=[

    {
        name:"hari",
        age:18,
        rol_num:2010
    },
    {
        name:"giri",
        age:18,
        rol_num:2020
    },
    {
        name:"raja",
        age:18,
        rol_num:2030
    }
]

for(item in studata){
    console.log("for in value:",studata[item]);
}
// array

var list = [1,2,3,4,5]

for(value of list){
    console.log("for of:",list[value]);
}

// for each

var datavalue1 = [10,4,65,1,2,3,4,5,6,6]

datavalue1.forEach((ele)=>console.log("Foreach Data;",ele))

// API

let data =
fetch("https://api.disneyapi.dev/character");
data.then((e)=>e.json())
.then((res)=>{

console.log(res);
 for(let key of res.data){
 console.log("API VALUE:",key)
   }
})

