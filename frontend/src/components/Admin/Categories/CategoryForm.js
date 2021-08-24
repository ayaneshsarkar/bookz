import React, { Fragment } from 'react';
import InputBox from '../../UI/InputBox';

const CategoryForm = props => {
  return (
    <Fragment>
      <form className="admin__form" onSubmit={props.onSubmit}>
        <InputBox parentClass="admin__form--box full-width right-margin mb-s"
        label="Category Name" 
        error={props.data.errors["category name"]}>
          <input id="name" 
          type="text" 
          className="admin__form--input" 
          placeholder="Category Name" 
          value={props.data.name || ''} 
          onChange={props.onChange} />
        </InputBox>

        <div className="admin__form--box no-margin">
          <button type="submit" className="admin__form--button">
            { props.buttonText || 'Create' }
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default CategoryForm;