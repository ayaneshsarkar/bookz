import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../../actions';
import { getTypes, createBook } from '../../../actions/bookActions';
import FormValidator from '../../../helpers/FormValidator';
import BookContainer from '../../../containers/BookContainer';
import BookForm from './BookForm';

class AddBook extends Component {

  state = {
    validator: new FormValidator(),
    errors: {},
    categories: [],
    types: [],

    title: '',
    author: '',
    publish_date: '',
    price: '',
    type_id: '',
    category_id: '',

    bookurl: [],
    bookfile: [],
    mainImage: '',
    bookFileName: '',

    description: '',

    popular: '',
    featured: '',
    premium: '',
    inventory: ''
  };

  async componentDidMount() {
    await this.props.getCategories();
    await this.props.getTypes();
    this.setState({
      errors: this.state.validator.errors,
      categories: [ ...this.props.categories ],
      types: [ ...this.props.types ]
    });
  }

  validateAllFields = () => {
    const validator = this.state.validator;

    validator.isString(this.state.title, "title", true);
    validator.isString(this.state.author, "author", true);
    validator.isDate(this.state.publish_date, "publish date", true);
    validator.isFile(this.state.bookurl, "main image", true);
    validator.isFile(this.state.bookfile, 'bookfile', true, 'book');
    validator.isString(this.state.description, "description");
    validator.isInt(this.state.price, "price", true);
    validator.isInt(this.state.type_id, "type", true);
    validator.isInt(this.state.category_id, "category", true);
    validator.isInt(this.state.popular, 'popular', true);
    validator.isInt(this.state.featured, 'featured', true);
    validator.isInt(this.state.premium, 'premium', true);
    validator.isInt(this.state.inventory, 'inventory', true);

    this.setState({ 
      errors: this.state.validator.errors,
    });
  }

  handleReset = () => {
    this.setState({
      title: '',
      author: '',
      publish_date: '', // moment().format("YYYY-MM-DD")
      price: '',
      type_id: '',
      category_id: '',
      bookurl: '',
      mainImage: '',
      bookfile: '',
      bookFileName: '',
      description: '',
      popular: '',
      featured: '',
      premium: '',
      inventory: ''
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
        mainImage: '',
        bookurl: []
      });
    }
  }

  handleBookFileChange = (e) => {
    this.state.validator.isPDF(e.target.files[0], "bookfile");
    
    if(e.target.files[0]) {
      this.setState({
        bookFileName: e.target.files[0].name,
        bookfile: e.target.files[0]
      });

    } else {
      this.setState({
        bookFileName: '',
        bookfile: []
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit = async (e, formRef) => {
    e.preventDefault();
    this.validateAllFields();

    if(!Object.keys(this.state.errors).length) {
      const formData = new FormData(formRef.current);

      try {
        await this.props.createBook(formData);
        this.props.history.push('/admin/books');
      } catch(err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <Fragment>
        <BookContainer title="Recommerce Admin - Add Book" headerTitle="Add Book">
          <BookForm data={this.state} handleChange={this.handleChange}
          handleFileChange={this.handleFileChange}
          handleBookFileChange={this.handleBookFileChange}
          handleSubmit={this.handleSubmit} />
        </BookContainer>
      </Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
    categories: Object.values(state.categories),
    types: Object.values(state.types)
  }
}

export default connect(mapStateToProps, { getCategories, getTypes, createBook })(AddBook);