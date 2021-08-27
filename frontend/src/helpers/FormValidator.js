import { capitalize, inArray } from './index';

class FormValidator {

  constructor() {
    this.errors = {};
  }

  isString(value, key, req = false, min = null, max = null) {
    if(req && !value.length) {
      this.errors[key] = `${capitalize(key)} field is required.`;
    } else if (typeof value !== 'string') {
      this.errors[key] = `${capitalize(key)} has to be a string.`;
    } else if ((req && min) && value.length < min) {
      this.errors[key] = `${capitalize(key)} has to be at least ${min} letters long.`;
    } else if((req && max) && value.length > max) {
      this.errors[key] = `${capitalize(key)} should be maximum ${max} letters long.`;
    } else {
      delete this.errors[key];
    }

    return this.errors;
  }

  isInt(value, key, req = false) {
    const regEx = /^\d+$/;

    if(req && !value) {
      this.errors[key] = `${capitalize(key)} field is required.`;
    } else if (!regEx.test(value)) {
      this.errors[key] = `${capitalize(key)} has to be a number.`;
    } else {
      delete this.errors[key];
    }

    return this.errors;
  }

  isMatch(value, key, match, matchKey, req = false) {
    if(req && !value) {
      this.errors[key] = `${capitalize(key)} field is required.`;
    } else if(value !== match) {
      this.errors[key] = `${capitalize(key)} has to match with ${capitalize(matchKey)}.`;
    } else {
      delete this.errors[key];
    }
  }

  isEmail = (value, key, req = false) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(req && !value) {
      this.errors[key] = `${capitalize(key)} field is required.`;
    } else if(!regEx.test(value)) {
      this.errors[key] = `${capitalize(key)} field has to be an email.`;
    } else {
      if(this.errors[key]) delete this.errors[key];
    }
  }

  isDate = (value, key, req = false) => {
    const regEx = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

    if(req && !value) {
      this.errors[key] = `${capitalize(key)} field is required.`;
    } else if (!regEx.test(value)) {
      this.errors[key] = `${capitalize(key)} has to be a valid date.`;
    } else {
      delete this.errors[key];
    }
  }

  isImage = (file, key) => {
    if(typeof file !== 'object') {
      if(this.errors[key]) delete this.errors[key];
      return true;
    } else {
      const fileName = file.name;
      const allowedArray = ["jpg", "jpeg", "png", "jfif"];
      const fileType = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

      if(!inArray(fileType, allowedArray)) {
        this.errors[key] = `${capitalize(key)} has to be an Image.`;
      } else {
        if(this.errors[key]) delete this.errors[key];
      }
    }
  }

  isPDF = (file, key) => {
    if(typeof file !== 'object') {
      if(this.errors[key]) delete this.errors[key];
      return true;
    } else {
      const fileName = file.name;
      const allowedArray = ["pdf", "epub"];
      const fileType = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();

      if(!inArray(fileType, allowedArray)) {
        this.errors[key] = `${capitalize(key)} has to be a valid Book.`;
      } else {
        if(this.errors[key]) delete this.errors[key];
      }
    }
  }

  isFile = (file, key, req = false, type = 'image') => {
    if(req && (file.length < 1)) {
      this.errors[key] = `${capitalize(key)} is required.`;
    } else if(type === 'image') {
      this.isImage(file, key);
    } else if(type === 'book') {
      this.isPDF(file, key);
    } else {
      if(this.errors[key]) delete this.errors[key];
    }
  }

}

export default FormValidator;