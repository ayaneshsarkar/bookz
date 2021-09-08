import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchBooks } from '../../../actions/bookActions';
import Book from './Book';

const SearchAllBooks = ({ searchBooks, books, term }) => {

  useEffect(() => searchBooks(term), [searchBooks, term]);
  // useEffect(() => getBooks());

  return (
    <div id="allbooks" className="allbooks">
      <h3 className="list__title">All Books</h3>

      <div className="list__box lg search">
        { books ? books.map(book => <Book key={book.id} book={book} />) : '' }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.searchBooks).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { searchBooks })(SearchAllBooks);