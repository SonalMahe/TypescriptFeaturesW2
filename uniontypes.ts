//Union Types ( | means OR )
// exercise 1-
type IDType= number | string;

const showID = (print:IDType) =>{
    console.log("Your ID is " + print);
};
showID("Sonal" + " "+ 999);


//2. 
type Fruit = "apple" |"banana" |"orange" ;
const eatFruits =(print : Fruit) =>{
    console.log("You ate an, " + print);
};
eatFruits("apple");
eatFruits("orange");