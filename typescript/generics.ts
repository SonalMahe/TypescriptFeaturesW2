// Generics ( <T> means reusable placeholder ) 
// 1.

const wrapInArray = <T> (input:T): T[] => {
 return [input];
};
console.log(wrapInArray("cat"));
//console.log(wrapInArray(5));



//2.
const firstItem = <T> (array: T) : T[] => {
    return [array];
}

console.log(firstItem([2,3,4]));
//console.log(firstItem(["a","b","c"]));



//3.
const swap = <T> (input1 :T , input2 :T) : T[] => {
 return [input2 ,input1]
};
console.log(swap("Hello", "World!"));
console.log(swap("Good", " Morning!"))