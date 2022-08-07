export class Book {
   title: string; 
   author: string; 
   releaseYear: Date;
   numberOfPages: number;

   constructor(title: string, author:string, releaseYear:Date, numberOfPages:number){
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
    this.numberOfPages = numberOfPages;
   }

   getBookWeight(): number {
      const page = this.numberOfPages * 10;
      return page + 100;
   }

   getBookInfo(){
      return `<h3>The following book's title:${this.title}</h3> <p>year of publication:${this.releaseYear}</p> <p>by this author:${this.author}</p> <p>Number of pages:${this.numberOfPages}</p>`
   }

   getReleaseYear(){
      return this.releaseYear;
   }

   getAuthor(){
      return this.author;
   }

   getNumberOfPages(){
      return this.numberOfPages;
   }
}