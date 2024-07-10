a=5;
var a=9;
console.log(a)
let b=20;
{
    let b=90;
    console.log(b)
}
console.log(typeof(b))
var st="hello";
console.log(typeof(st))
var d=true;
console.log(typeof(d))
var m;
console.log(typeof(m))
console.log(typeof(z))
var arr=['orange',10]
console.log(arr[0])
console.log(arr.length)
arr.push('pineapple')
console.log(arr)
// java script objects
let person={
    name:"ABCD",
    age:20,
    location:"TVM"
}
let arr2=[{name:"ABCD",
    age:20,
    location:"TVM"},
    {
        name:"XYZ",
        age:19,
        location:"KOLLAM"
    }]
    console.log(arr2[1].location)
    // functions
    function add(x,y) {
        var sum=x+y;
        console.log(sum)
    }
add(11,13);
function mul(x,y) {
    var prod=x*y;
    return prod;
}
let p=mul(10,3);
console.log(p)
let x=10;
let y='10';
console.log(x)
console.log(y)
if (x<y) {
    console.log("y is greater") 
}
else if(x===y)
{
    console.log("same") 
}
else {
    console.log("x is greater")
}

    // looping statements
    var array=[1,2,3,4,5]
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
    }
    for (const key in person) {
     console.log(person[key])
    }

    for (const i of array) {
        console.log(i)
    }