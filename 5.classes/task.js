class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5
    }

    set state(value) {
        if (value < 0) {
             this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        };
    }

    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args); 
        this.type = 'Magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(author, ...args);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = 'detective';
    }
}
 
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    };

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
        return this.books;
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) return this.books[i];
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) return this.books.splice([i], 1)[0];
        }
        return null;
    }
}