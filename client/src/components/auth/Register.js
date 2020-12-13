import React from 'react';
import RegisterForm from './forms/RegisterForm';
import { register } from '../../actions/auth';

import { connect } from 'react-redux';

class Register extends React.Component {
    onSubmit = (formValues) => {
        this.props.register(formValues);
    }

    render() {
        return (
            <>
                <RegisterForm onSubmit={this.onSubmit}/>
            </>
        );
    }
}

export default connect(null, { register })(Register);