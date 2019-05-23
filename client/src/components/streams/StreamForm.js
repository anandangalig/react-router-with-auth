import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
  renderErrorMessage({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = fieldProps => {
    //fieldProps has extra props coming from Field(redux-form)
    const conditionalClassNames = `field ${
      fieldProps.meta.error && fieldProps.meta.touched ? 'error' : ''
    }`;
    return (
      <div className={conditionalClassNames}>
        <label>{fieldProps.label}</label>
        <input {...fieldProps.input} autoComplete="off" />
        {this.renderErrorMessage(fieldProps.meta)}
      </div>
    );
  };

  mySubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.mySubmit)}>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field name="description" component={this.renderInput} label="Enter description" />
        <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  // when hooked up, this will run with each render AND form interaction on the DOM
  // if returned empty, redux-form will take it as no errors during validation
  // redux-form will try and match the errors properties to <Field /> name prop. If any matches, it will take the error message and pass it to component prop of the <Field /> in the meta object
  const errors = {};
  if (!formValues.title) {
    errors.title = 'Enter a title';
  }
  if (!formValues.description) {
    errors.description = 'Enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate: validate,
})(StreamForm);
/*
NOTES:
Field element does not create the field element on its own. Instead it connects this component to the Redux Store. It needs a component prop that returns the actual field, and connect the onChange and value of the input field
*/
