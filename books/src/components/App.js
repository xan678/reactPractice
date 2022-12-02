import React, {useEffect, useContext} from "react";
import BookCreate from './BookCreate';
import BookList from './BookList';
import BooksContext from "../context/books";

const App = () => {

    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();   
    }, [fetchBooks]);

    return (<div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>);
}

export default App;