// function uppercase(name)
// {
//     return name.toUpperCase();
// }

// function birthDay(age)
// {
//     const bd = 2025 - age;
//     return bd;
// }

// console.log(uppercase("shlomo noyshtat"));
// console.log("your birch year: " + birthDay(23));

// // calculator
// const add = (num1,num2) => {return num1 + num2}
// const subtract = (num1,num2) => {return num1 - num2}
// const multiply = (num1,num2) => {return num1 * num2}
// const divide = (num1,num2) => {return num1 / num2}

// console.log(add(20,5));
// console.log(subtract(20,5));
// console.log(multiply(20,5));
// console.log(divide(20,5));


// function t(){
//     let x = 5;
//     if(true)
//     {
//         let x = 10;
//     }
//     console.log(x);
    
// }
// t()


// const array = ["sh", "lo", "m"];

// function printValue(value){
//     console.log(`value: ${value}`);
    
// }

// function MyForEach(arr,fn){
//     for(let i = 0; i < array.length; i ++){
//         const el = arr[i];
//         fn(el);
//     }
// }

// MyForEach(array,printValue)

// q1
// const listNum = [3,5,7,9,12];
// const double = listNum.map(n => n * 2);
// console.log(double);

// q2
// const list = [3,5,4,98,56,33,65,72]
// const onlyEvenValue = list.filter(element => element % 2 === 0)
// console.log(onlyEvenValue);

// q3
function showFirstAndLast(arr){
    let result = [];
    if(typeof arr[0] === "string"){
        result.push(arr[0]);
    }
    if(typeof arr[arr.length - 1 && arr.length >= 1]){
        result.push(arr[arr.length -1])
    }
    return result;
}
const fun = showFirstAndLast(["rer",45,"gsk","kghgk","iexnm"])
console.log(fun);
