(function () {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: 'Hannah',
    //     lastName: 'Paterka',
    //     sayHello: function () {
    //         console.log("Hello " + this.firstName + ' ' + this.lastName);
    //     }
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320},
    // ];
    //
    // shoppers.forEach(function (shopper) {
    //     if (shopper.amount > 200) {
    //         console.log("Hello " + shopper.name + ". You have spent over $200.00, You qualify for a 12% discount. You're discounted total is $" + (shopper.amount - shopper.amount * .12).toFixed(2));
    //     } else {
    //         console.log("Sorry, " + shopper.name + ". You don't qualify for the discount. You're total is $" + shopper.amount.toFixed(2));
    //     }
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [
    //     {title: 'Desert Solitaire',
    //         author: {
    //             firstName: 'Edward',
    //             lastName: 'Abbey',
    //         }
    //     },
    //     {
    //         title: 'The Argonauts',
    //         author: {
    //             firstName: 'Maggie',
    //             lastName: 'Nelson',
    //         }
    //     },
    //     {
    //         title: 'Till we have faces',
    //         author: {
    //             firstName: 'C.S.',
    //             lastName: 'Lewis',
    //         }
    //     },
    //     {
    //         title: 'Gifts from the sea',
    //         author: {
    //             firstName: 'Anne',
    //             lastName: 'Lindbergh',
    //         }
    //     },
    //     {
    //         title: 'My Journal',
    //         author: {
    //             firstName: 'Me',
    //             lastName: '& Me',
    //         }
    //     }
    // ];
    //
    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

    var books2 = [
            new CreateBook('Desert Solitaire', 'Edward Abbey'),
            new CreateBook('The Argonauts', 'Maggie Nelson'),
            new CreateBook('Till we have faces', 'C.S. Lewis'),
            new CreateBook('Gifts from the Sea', 'Anne Lindbergh'),
            new CreateBook('My Journal', 'Me &Me'),
        ]

    console.log(books2);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // my original code, but the following code block is more appropriate
    // for (var i = 0; i < books.length; i++) {
    //     console.log('Book # ' + (i + 1) + "\n" + 'Title: ' + books[i].title + "\n" + "Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    // }

    // books.forEach(function (book) {
    //     console.log('Book # ' + (books.indexOf(book) + 1) + "\n" + 'Title: ' + book.title + "\n" + "Author: " + book.author.firstName + " " + book.author.lastName);
    // });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     use your function.
     */

    function CreateBook(title, author) {
        {
            this.title = title;
            this.author = author;
        }
    }
    var newBook = new CreateBook('Desert Solitaire', 'Edward Abbey');

    // console.log(newBook);

    /** - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     //  */

    function showBookInfo(books2) {
        return books2;
    }

    console.log(showBookInfo(books2[0].title + ' \n by \n' + books2[0].author));
    console.log(showBookInfo(books2[1].title + ' \n by \n' + books2[1].author));

    books2.forEach(function (book) {
        console.log(showBookInfo(book.title + ' \n by \n' + book.author));
    });

})();