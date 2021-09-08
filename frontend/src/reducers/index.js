import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import bookReducer from './bookReducer';
import frontBookReducer from './frontBookReducer';
import typeReducer from './typeReducer';
import { cartReducer, cartTotalReducer } from './cartReducer';
import { orderReducer, orderBooksReducer } from './orderReducer';
import { 
  popularReducer, 
  featuredReducer, 
  premiumReducer, 
  frontCategoryReducer,
  searchBooksReducer,
  categoryBooksReducer
} from './homeReducer';

export default combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  books: bookReducer,
  frontBooks: frontBookReducer,
  types: typeReducer,
  cart: cartReducer,
  cartTotal: cartTotalReducer,
  orders: orderReducer,
  orderBooks: orderBooksReducer,
  popularBooks: popularReducer,
  featuredBooks: featuredReducer,
  premiumBooks: premiumReducer,
  frontCategories: frontCategoryReducer,
  searchBooks: searchBooksReducer,
  categoryBooks: categoryBooksReducer
});
