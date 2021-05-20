import React, { Component } from 'react';
import Book from '../representational/Book';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class BookList extends Component {
  render() {

    return (
      this.props.books.map((book, index) => {
        return (
          <Link to={"/" + book.id} style={{ textDecoration: 'none', color: 'black' }}>
            <Book
              bookName={book.bookName}
              writer={book.writer}
              key={book.id}
              selectedBookHandler={() => this.props.selectedBookHandler(book.id)}

            />
          </Link>

        );
      })
    )
  }
}

export default withRouter(BookList);