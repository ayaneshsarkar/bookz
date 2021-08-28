import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/bookActions';
import Book from './Book';

const AllBooks = ({ getBooks, books }) => {

   // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getBooks(), []);
  // useEffect(() => getBooks());

  return (
    <div id="allbooks" className="allbooks">
      <h3 className="list__title">All Books</h3>

      <div className="list__box lg">
        { books.length ? books.map(book => <Book key={book.id} book={book} />) : '' }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.frontBooks).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { getBooks })(AllBooks);