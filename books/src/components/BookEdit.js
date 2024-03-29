import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({book, handleEdit}) => {

    const [title, setTitle] = useState(book.title);
    const {editBookById} = useContext(BooksContext); 

    const handleSubmit = (e) => {
        e.preventDefault();
        editBookById(book.id, title);
        handleEdit();
        console.log("New Title is ", title);
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <form className="book-edit" onSubmit = {handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange = {handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}

export default BookEdit;