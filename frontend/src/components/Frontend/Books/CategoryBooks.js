import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { categoryBooks } from '../../../actions/bookActions';
import Book from './Book';

const CategoryBooks = ({ categoryBooks, books, id, name }) => {

  useEffect(() => categoryBooks(id), [categoryBooks, id]);

  return (
    <div id="allbooks" className="allbooks">
      <h3 className="list__title">Category: { name }</h3>

      <div className="list__box lg search">
        { books ? books.map(book => <Book key={book.id} book={book} />) : '' }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.categoryBooks).sort((a, b) => b.id - a.id)
  }
}

export default connect(mapStateToProps, { categoryBooks })(CategoryBooks);