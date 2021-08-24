import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Sprite from '../../../assets/svg/feather-sprite.svg';

const CategoryTable = props => {

  const renderCategories = () => {
    return props.categories.map((category, i) => {
      return (
        <tr key={ category.id }>
          <td>{ i + 1 }</td>
          <td>{ category.name || '' }</td>
          <td>{ moment(category.updated_at).format("MMMM D, YYYY, h:mm a") || '' }</td>
          <td>
            <Link to={`/admin/edit-category/${category.id}`}>
              <svg>
                <use xlinkHref={`${Sprite}#edit-2`}></use>
              </svg>
            </Link>
          </td>
          <td>
            <svg onClick={() => props.deleteCategoryProcess(category.id)}>
              <use xlinkHref={`${Sprite}#trash-2`}></use>
            </svg>
          </td>
        </tr>
      );
    });
  }

  return (
    <Fragment>
      <thead>
        <tr>
          <th>Sl No.</th>
          <th>Name</th>
          <th>Updated At</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { renderCategories() }
      </tbody>
    </Fragment>
  );
}

export default CategoryTable;