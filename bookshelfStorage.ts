import { Book } from "./book";
import { Bookshelf } from "./BookshelfStore";


const BookshelfStore = new BookShelf()

const book01= new Book('The girl', 'Marie Moss', new Date('2002'), 278);
BookshelfStore.addBook(book01);

const book02 = new Book('The fox and the rabbit', 'Karl Maddox', new Date('1925'), 167)
BookshelfStore.addBook(book02);

const book03 = new Book('Crying River', 'Justin Jane', new Date('2012'), 453)
BookshelfStore.addBook(book03);

console.log(Bookshelf.getBooks)
BookshelfStore.printBooks();

