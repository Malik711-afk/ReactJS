const getBooks = [
  {
    id: 1,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Literary Fiction"
  },
  {
    id: 2,
    name: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian Fiction"
  },
  {
    id: 3,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance"
  },
  {
    id: 4,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Southern Gothic"
  },
  {
    id: 5,
    name: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy"
  }
];


const book = getBooks();

const title = book.name;
const author = book.author;

console.log(title, author);