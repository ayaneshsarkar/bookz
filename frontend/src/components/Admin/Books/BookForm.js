import React, { Fragment, useRef } from 'react';
import { capitalize } from '../../../helpers';
import InputBox from '../../UI/InputBox';
import { FlexBreak } from '../../../helpers';

const BookForm = ({ data, handleChange, handleSubmit, handleFileChange, buttonText }) => {
  const fileInput = useRef(null);
  const formRef = useRef(null);

  const fileClick = () => {
    fileInput.current.click();
  }

  return (
    <Fragment>
      <form className="admin__form" 
      ref={formRef}
      onSubmit={(e) => handleSubmit(e, formRef)} 
      encType="multipart/form-data">
        {/* Title */}
        <InputBox parentClass="admin__form--box adjust right-margin" label="Book Title"
        error={data.errors.title} >
          <input className="admin__form--input" 
          type="text" name="title" placeholder="Book Title" 
          value={data.title} onChange={handleChange} />
        </InputBox>

        {/* Author */}
        <InputBox parentClass="admin__form--box adjust" label="Book Author"
        error={data.errors.author} >
          <input className="admin__form--input" 
          type="text" name="author" placeholder="Book Author" 
          value={data.author} onChange={handleChange} />
        </InputBox>

        <FlexBreak />

        {/* Publish Date */}
        <InputBox parentClass="admin__form--box adjust right-margin" label="Publish Date"
        error={data.errors["publish date"]} >
          <input className="admin__form--date" 
          type="date" name="publish_date" 
          value={data.publish_date} 
          onChange={handleChange} />
        </InputBox>

        {/* Price */}
        <InputBox parentClass="admin__form--box adjust right-margin" label="Price"
        error={data.errors.price} >
          <input className="admin__form--input" 
          type="number" name="price" placeholder="Price"
          value={data.price} onChange={handleChange} />
        </InputBox>

        {/* Type */}
        <InputBox parentClass="admin__form--box adjust right-margin" error={data.errors.type}>
          <select className="admin__form--select" name="type_id" required 
          value={data.type_id} onChange={handleChange}>
            <option value="">Select Type</option>
            { data.types && 
              data.types.map(type => {
                return (
                  <option key={type.id} value={type.id}>{ capitalize(type.type) }</option>
                )
              })
            }
          </select>
        </InputBox>

        {/* Categories */}
        <InputBox parentClass="admin__form--box adjust" error={data.errors.category}>
          <select className="admin__form--select" name="category_id" required 
          value={data.category_id} onChange={handleChange}>
            <option value="">Select Category</option>
            { data.categories && 
              data.categories.map(category => {
                return (
                  <option key={category.id} value={category.id}>
                    { category.name }
                  </option>
                )
              })
            }
          </select>
        </InputBox>

        {/* Main Image */}
        <InputBox parentClass="admin__form--box full-width file"
        error={data.errors["main image"]} errorClass="fileError" >
          <input className="admin__form--input file" ref={fileInput}
          type="file" name="bookurl" placeholder="Main Image"
          onChange={handleFileChange} hidden />

          <div className="admin__form--fileButton" onClick={fileClick}>Choose File</div>

          <span 
          className=
          {`admin__form--fileText${data.bookurl ? ' active' : '' }`}>
            { data.mainImage || 'No File Chosen' }
          </span>
        </InputBox>

        {/* Description */}
        <InputBox parentClass="admin__form--box full-width" label="Description"
        errorClass={"textarea-error"}
        error={data.errors.description} >
          <textarea className="admin__form--input" rows="5"
          type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange}></textarea>
        </InputBox>

        <div className="admin__form--box top-margin" 
        style={{ marginTop: "11rem", marginBottom: 0 }}>
          <button className="admin__form--button">{ buttonText || 'Create Book' }</button>
        </div>
      </form>
    </Fragment>
  );

}

export default BookForm;