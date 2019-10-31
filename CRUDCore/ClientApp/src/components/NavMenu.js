import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "../action/authAction";
import './Nav.css'
class NavMenu extends Component {
    state = {}
    render() {
        const { isAuthenticated, user } = this.props.auth;
        return (
            <header>
                <div class="hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="menu__btn" for="menu__toggle">
                        <span></span>
                    </label>
                    <ul class="menu__box">
                    <Link class="menu__item" href="#">CiNeMa</Link>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <Link className="menu__item"  to="/userprofile">{user.name}</Link> :

                                    <Link  className="menu__item"  to="/registration">Register</Link>
                            }
                        </li>
                        <li className="nav-item">
                            {
                                isAuthenticated ?
                                    <Link  className="menu__item"  to="/" onClick={(e) => { e.preventDefault(); this.props.logout(); }}>LogOut</Link> :

                                    <Link  className="menu__item"  to="/login">Login</Link>
                            }
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

NavMenu.propTypes = {
    logout: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout })(NavMenu);