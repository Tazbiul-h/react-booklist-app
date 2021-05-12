import React from 'react';
import '../../stylesheets/Book.css';

const Book = (props) => {
    return(
        <div className = "Book">
            <h3 onClick = {props.delete}>Book: {props.bookName} </h3>
            <h3>Writer: {props.writer} </h3>
            <input type ="text" onChange = {props.inputName} value ={props.bookName}></input>

            
        </div>
        
    );
}
export default Book;