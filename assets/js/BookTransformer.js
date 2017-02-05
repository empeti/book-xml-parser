/**
 * Created by empet on 2017. 02. 05..
 */
BookTransformer = {
    transformFromXML: function(bookXML){
            var title       = $(bookXML).find("title").text();
            var isbn        = $(bookXML).attr("isbn13");
            var author      = $(bookXML).find("author").text();
            var publisher   = $(bookXML).find("publisher").text();

            var book = new Book();
            book.setTitle(title);
            book.setIsbn(isbn);
            book.setAuthor(author);
            book.setPublisher(publisher);

            return book;
    }
};
