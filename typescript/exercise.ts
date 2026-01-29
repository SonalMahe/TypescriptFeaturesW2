//Enums (fixed list of options) -
//1. why my output comes in number, i am not using any findIndex function here ??

enum Color { Red, Green, Blue };
const showColor = (color: Color) => {
    console.log("You chose:", color);
};
showColor(Color.Blue);

//2.

enum PizzaSize {
    Small,
    Medium,
    Large
}
const orderPizza = (size: PizzaSize) => {
    console.log(`You ordered a ${size} pizza. `)
}
orderPizza(PizzaSize.Medium);


//3. 
enum Role {
    Admin, User, Guest
}
const printRole = (check: Role) => {
    if (check === Role.Admin) {
        console.log("You have full access.");
    } else if (check === Role.User) {
        console.log("You have limited access.");
    } else if (check === Role.Guest) {
        console.log("You have guest access.");
    }
};
printRole(Role.Admin);
printRole(Role.Guest);