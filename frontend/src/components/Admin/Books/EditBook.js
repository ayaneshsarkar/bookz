import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getCategories } from '../../../actions';
import { getTypes, getBook, updateBook } from '../../../actions/bookActions';
import FormValidator from '../../../helpers/FormValidator';
import BookContainer from '../../../containers/BookContainer';
import BookForm from './BookForm';

class EditBook extends Component {
  
  state = {
    validator: new FormValidator(),
    errors: {},
    categories: [],
    types: [],

    id: this.props.match.params.id,
    title: '',
    author: '',
    publish_date: '',
    price: '',
    type_id: '',
    category_id: '',
    bookurl: '',
    mainImage: '',
    description: ''
  }

  async componentDidMount() {
    await this.props.getBook(this.state.id);
    await this.props.getTypes();
    await this.props.getCategories();

    const book = this.props.book;

    this.setState({
      errors: this.state.validator.errors,
      categories: [ ...this.props.categories ],
      types: [ ...this.props.types ],

      title: book.title || '',
      author: book.author || '',
      publish_date: book.publish_date ? moment(book.publish_date).format('YYYY-MM-DD') : '',
      price: book.price || '',
      type_id: book.type_id || '',
      category_id: book.category_id || '',
      mainImage: book.bookurl || '',
      description: book.description || ''
    });
  }

  validateAllFields = () => {
    const validator = this.state.validator;

    validator.isString(this.state.title, "title", true);
    validator.isString(this.state.author, "author", true);
    validator.isDate(this.state.publish_date, "publish date", true);
    validator.isImage(this.state.bookurl, "main image");
    validator.isString(this.state.description, "description");
    validator.isInt(this.state.price, "price", true);
    validator.isInt(this.state.type_id, "type", true);
    validator.isInt(this.state.category_id, "category", true);

    this.setState({ 
      errors: this.state.validator.errors,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFileChange = (e) => {
    this.state.validator.isImage(e.target.files[0], "main image");

    if(e.target.files[0]) {
      this.setState({
        mainImage: e.target.files[0].name,
        bookurl: e.target.files[0]
      });

    } else {
      this.setState({
        mainImage: this.props.book.bookurl,
        bookurl: ''
      });
    }
  }

  handleSubmit = async (e, formRef) => {
    e.preventDefault();
    this.validateAllFields();

    if(!Object.keys(this.state.errors).length) {
      const formData = new FormData(formRef.current);
      formData.append('id', this.state.id);

      try {
        await this.props.updateBook(formData);
        this.props.history.push('/admin/books');
      } catch(err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <Fragment>
        <BookContainer 
          title="Recommerce Admin - Edit Book" 
          headerTitle="Edit Book"
          path={this.props.match.path}
        >
          <BookForm data={this.state} 
            handleChange={this.handleChange}
            handleFileChange={this.handleFileChange}
            handleSubmit={this.handleSubmit}
            buttonText="Update Book"
          />
        </BookContainer>
      </Fragment>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    book: state.books[ownProps.match.params.id] || [],
    categories: Object.values(state.categories),
    types: Object.values(state.types)
  }
}


export default connect(mapStateToProps, { 
  getCategories, getTypes, getBook, updateBook 
})(EditBook);