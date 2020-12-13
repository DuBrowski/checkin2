import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class Navbar extends React.Component {

    renderAuth = () => {
        if (this.props.auth.isAuthenticated) {
            return (
                <>
                    <Link to="/" className="item">Board</Link>
                    <Link to="/board/create" className="item">Create Row</Link>
                    <a onClick={this.props.logout} className="item">
                        Logout
                        <i className="icon alternate sign out"/>
                    </a>
                </>
            );
        } else {
            return (
                <>
                    <Link to="/login" className="item">
                        <i className="icon alternate sign in"/>
                        Login
                    </Link>
                    <Link to="/register" className="item">Sign Up</Link>
                </>
            );
        }
    }

    render() {
        return (
            <div className="ui secondary pointing menu" style={{
                background: 'linear-gradient(90deg, rgba(89,170,68,0.8802871490393032) 0%, rgba(88,170,68,0.6337885495995272) 100%)'}}>
                <Link to="/" className="item">Check In</Link>
                <div className="right menu">
                    {this.renderAuth()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);