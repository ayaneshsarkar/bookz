import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getBooks, deleteBook } from '../../../actions/bookActions';
import BookContainer from '../../../containers/BookContainer';
import BookTable from './BookTable';
import history from '../../../config/history';

class Books extends Component {

  state = {
    books: [],
    isLoaded: false,
  }

  async componentDidMount() {
    await this.props.getBooks();
    this.setState({
      books: [ ...this.props.books ],
      isLoaded: true
    });
  }

  deleteBookProcess = async id => {
    await this.props.deleteBook(id);
    this.setState({
      books: [ ...this.props.books ]
    });
  }

  render() {
    if(!this.props.user || this.props.user.type !== 'admin') {
      history.push('/');
      return <></>;
    } else {
      return (
        <Fragment>
          <BookContainer title="Recommerce Admin - All Books" headerTitle="All Books" table={true} 
          add={true} 
          addLink={'/admin/add-book'}
          tablePadding={'small'}>
            <BookTable books={this.state.books} deleteBookProcess={this.deleteBookProcess} />
          </BookContainer>
        </Fragment>
      );
    }
  }

}

const mapStateToProps = state => {
  return {
    books: Object.values(state.books).sort().reverse(),
    user: state.auth.user
  }
};

export default connect(mapStateToProps, { getBooks, deleteBook })(Books);