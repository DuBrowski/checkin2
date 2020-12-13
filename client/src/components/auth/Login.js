import React from 'react';
import LoginForm from './forms/LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';


class Login extends React.Component {

    onSubmit = (formValues) => {
        this.props.login(formValues);
    }

    render() {

        if (this.props.isAuthenticated) {
            return <Redirect to="/"/>;
        }

        return (
            <>
                <LoginForm onSubmit={this.onSubmit}/>
            </>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);