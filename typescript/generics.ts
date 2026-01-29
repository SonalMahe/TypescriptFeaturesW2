// Generics ( <T> means reusable placeholder ) 
// 1.

const wrapInArray = <T> (input:T): T[] => {
 return [input];
};
console.log(wrapInArray("cat"));
console.log(wrapInArray(5));



//2.
const firstItem = <T> (input1: T, input2: T, input3: T) : T[] =>{
    return [input1,input2,input3];
}
console.log(firstItem(1,2,3));
console.log(firstItem("a","b","c"));



//3.
const swap = <T> (input1 :T , input2 :T) : T[] => {
 return [input2 ,input1]
};
console.log(swap("Hello", "World!"));
console.log(swap("Good", " Morning!"))