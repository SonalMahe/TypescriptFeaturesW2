//interfaces

//1.Book Interfaces-

interface Book {
    title: string;
    pages: number;
}
const describeBook = (book: Book) => {
    console.log(`The ${book.title} has ${book.pages} pages.`)
}
describeBook({
    title: "GAME OF THRONES",
    pages: 550
});


//2.Create two interfaces-

interface Teacher {
    name: string;
    subject: string;
};
interface Employee {
    id: number;
    email: string;
}
type SchoolTeacher = Teacher & Employee;
const printTeacherInfo = (teacher: SchoolTeacher) => {
    console.log(`The teacher name is:- ` + teacher.name,
        `. Her ID :- ` + teacher.id,
        `.  Email ID :- ` + teacher.email,
        `.  Subject she teaches:- ` + teacher.subject);
};

printTeacherInfo({
    name: "Sonal",
    id: 9,
    email: "sonal@gamil.com",
    subject: "Maths and Science."
});



//3. Car-
interface Car {
    brand: string;
    year: number
}
const printCar = (car: Car) => {
    console.log(`The Car brand :${car.brand} and model year :${car.year}`);
}
printCar({
    brand: "Polestar",
    year: 2025
})