import React from 'react';
import { Field, reduxForm } from 'redux-form';

class RegisterForm extends React.Component {

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className= `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error container" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <div className="field">
                    <Field name="name" component={this.renderInput} label="Name"/>
                </div>
                <div className="field">
                    <Field name="email" component={this.renderInput} label="Email"/>
                </div>
                <div className="field">
                    <Field name="password" component={this.renderInput} label="Password"/>
                </div>
                <div className="field">
                    <Field name="password2" component={this.renderInput} label="Confirm Password"/>
                </div>
                <button className="ui button primary">Register</button>
            </form>
        );
    }
}

const validate = (formValues) =>  {
    const errors = {};

    if (!formValues.email) {errors.email = "Please enter an email"}
    if (!formValues.name) {errors.name = "Please enter a name"}
    if (!formValues.password) {errors.password = "Please enter a password"}
    if (formValues.password2 !== formValues.password) {errors.password2 = "Passwords must match"}

    return errors;
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm);