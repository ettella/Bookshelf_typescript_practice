import { Book } from "./book";

export class Bookshelf {
    newBook: Book[] = [];
    

    addBook(oneBook: Book): void{
        this.newBook.push(oneBook);
    }

    getBooks(year: number): [] {
        this.newBook.filter(b => Book.releaseYear.getReleaseYear() === year)
    }

    getLightestAuthor(): string {
        const comparingBook = this.newBook.reduce((x,y) => x.getBookWeight() < y.getBookWeight() ? x : y );
        return comparingBook.author;
    }

    getAuthorOfMostWrittenPages(newBook: Book): string{
        const mostWrittenPages = this.newBook.filter((x,y) => x.getNumberOfPages() < y.getNumberOfPages() ?  x : y);
        return mostWrittenPages.author;
    }

    printBooks(): void{
        return this.newBook.getBookInfo()
        //this.newBook.forEach(b => {console.log(b.getBookInfo)})
    }


}