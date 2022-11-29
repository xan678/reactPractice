import { useState } from "react";

const BookEdit = ({book, onEdit, handleEdit}) => {

    const [title, setTitle] = useState(book.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(book.id, title);
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