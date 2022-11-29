import { useState } from "react";
import BookEdit from './BookEdit';

const BookShow = ({book, onDelete, onEdit}) => {
    const [showEdit, setShowEdit] = useState(false);

    let content = <h3>{book.title}</h3>

    const handleClick = () => {
        onDelete(book.id);
    }

    const handleEdit = () => {
        setShowEdit(!showEdit);
    }

    if(showEdit) {
        content = <BookEdit onEdit = {onEdit} handleEdit = {handleEdit} book = {book}/>
    }

    return (
        <div className="book-show">
            <img 
                alt="books"
                src = {`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{content}</div>
            <div className="actions">
                <button className="delete" onClick={handleClick}>
                 Delete
                </button>
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
            </div>
        </div>
    );
}

export default BookShow;