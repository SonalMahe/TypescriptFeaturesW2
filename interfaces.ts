//interfaces

//1.
interface Book{
    title:string;
    pages:number;
}

const describeBook=(book:Book) =>{
    console.log(`The ${book.title} has ${book.pages} pages.`)
}
describeBook("harry potter");