/**
 * Created by empet on 2017. 02. 05..
 */
var Book = function(){
    this.title      = "";
    this.isbn       = "";
    this.author     = "";
    this.publisher  = "";

    this.setTitle = function(title){
        this.title = title;
    };

    this.setIsbn = function(isbn){
        this.isbn = isbn;
    };

    this.setAuthor = function(author){
        this.author = author;
    };

    this.setPublisher = function(publisher){
        this.publisher = publisher;
    };
};