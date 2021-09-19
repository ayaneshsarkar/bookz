import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrderBooks, getOrders } from '../../actions/orderActions';
import AdminUX from '../../containers/AdminUX';
import Header from './Header';
import Book from './Book';
import Head from '../../containers/Helmet';
import history from '../../config/history';

class Admin extends Component {

  state = {
    books: []
  }

  async componentDidMount() {
    await this.props.getOrders();
    await this.props.getOrderBooks();
    this.setState({ books: this.props.books });
  }

  render() {
    if(!this.props.user) {
      history.push('/');
      return <></>;
    } else {
      return (
        <>
          <Head title="Recommerce Admin" />
          <AdminUX>
            <Header title="Dashboard" search={true} headClass=" admin" />
            <section id="books" className="books">
              <h1 className="books__title">Your Books</h1>
              <div className="books__content admin">
                {
                  this.state.books.length ? 
                  this.state.books.map(book => <Book key={book.id} book={book} 
                    user={this.props.user} />)
                  : ''
                }
              </div>
            </section>
          </AdminUX>
        </>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    books: Object.values(state.orderBooks).sort().reverse()
  }
}

export default connect(mapStateToProps, { getOrderBooks, getOrders })(Admin);