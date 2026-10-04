var movies = [
  { title: "Inception", director: "Christopher Nolan", duration: 148, releaseDate: "2010", cast: "Leonardo DiCaprio, Ellen Page", studio: "Warner Bros.", synopsis: "Dreams within dreams.", rating: 8.8 },
  { title: "The Shawshank Redemption", director: "Frank Darabont", duration: 142, releaseDate: "1994", cast: "Tim Robbins, Morgan Freeman", studio: "Castle Rock", synopsis: "Hope in prison.", rating: 9.3 },
  { title: "Parasite", director: "Bong Joon Ho", duration: 132, releaseDate: "2019", cast: "Song Kang-ho, Lee Sun-kyun", studio: "CJ Entertainment", synopsis: "Class and greed.", rating: 8.6 },
  { title: "Spirited Away", director: "Hayao Miyazaki", duration: 125, releaseDate: "2001", cast: "Rumi Hiiragi, Miyu Irino", studio: "Studio Ghibli", synopsis: "A girl in the spirit world.", rating: 8.6 },
  { title: "The Dark Knight", director: "Christopher Nolan", duration: 152, releaseDate: "2008", cast: "Christian Bale, Heath Ledger", studio: "Warner Bros.", synopsis: "Batman vs Joker.", rating: 9.0 }
];
function makeMovie(title, director, duration, releaseDate, cast, studio, synopsis, rating) {
  return{
    title:title,
    director:director,
    duration:duration,
    releaseDate:releaseDate,
    cast:cast,
    studio:studio,
    synopsis:synopsis,
    rating:rating
  }

}
   let movie1 = makeMovie("Inception", "Christopher Nolan", 148, "2010", "Leonardo DiCaprio, Ellen Page", "Warner Bros.", "Dreams within dreams.", 8.8)
   //nsole.log(movie1)
   //exercice 2.2
   let movie2 = makeMovie("", "Christopher Nolan", 148, "2010", "Leonardo DiCaprio, Ellen Page", "Warner Bros.", "Dreams within dreams.", 8.8)
   //nsole.log(movie2)
//partie2

var books = [
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", msrp: 24.99, genre: "fantasy", numPages: 309, description: "A young wizard discovers his destiny." },
  { title: "Romeo and Juliet", author: "William Shakespeare", msrp: 9.99, genre: "tragedy", numPages: 120, description: "Two young lovers in Verona." },
  { title: "Structure and Interpretation of Computer Programs", author: "Gerald Jay Sussman, Hal Abelson", msrp: 45, genre: "technical", numPages: 657, description: "Classic CS textbook." },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", msrp: 14.99, genre: "fiction", numPages: 180, description: "American dream in the Jazz Age." },
  { title: "1984", author: "George Orwell", msrp: 13.99, genre: "dystopian", numPages: 328, description: "Totalitarianism and surveillance." }
];
function makeBook(title, author, msrp, genre, numPages, description) {
  return {
    title : title,
    author : author ,
    msrp : msrp ,
    genre : genre ,
    numPages : numPages ,
    description : description
  }
}
let book1 = makeBook("harry potter","J.K. Rowling",24.99,'fantasy',309,"a young wizrad discovers his destiny")
//nsole.log(book1)
 function displayBookList(books){
    let result =""
    for(let i=0;i<books.length;i++){
        result +=i+"."+displayBook(books[i])+"\n"
    }
    
return result
}
//nsole.log(displayBookList(books))
function displayBook(book){
    return book.title + " " +book.author+ " "+book.msrp+" "+book.genre+" "+book.description
}
//nsole.log(displayBook(book1))
function addBook(books, book) {
  books.push(book)
 return "book successfully added"
}
let book4 = makeBook("kalila w demna","wassel",999.99,"fantasy",555,"a young man miserable life")
//nsole.log(addBook(books,book4))
//nsole.log(books)

function removeBook(books, title) {
  for (i=0;i<books.length;i++)
    if (books[i].title===title) {
      books.splice(i,1)
      return"removed"+title
    }
    
}
//nsole.log(removeBook(books,"1984"))
//nsole.log(books)
function findMostExpensiveBook(books) {
  let MostExpensive=books[0]
  for(let i=1;i<books.length;i++){
    if (books[i].msrp > MostExpensive.msrp) {
      MostExpensive=books[i]
    }
  }return MostExpensive
}
console.log(findMostExpensiveBook(books))


