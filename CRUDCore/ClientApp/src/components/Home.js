import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './Modal.css';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import { Link } from "react-router-dom";
class Home extends Component {
    state = {
        isShowModal: false,
        // credentialMessage: {
        //     isShow: false
        // }
    }
    componentDidMount() {
        //this.props.getListData();
    }
    redirectToAddUser = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----перехід на іншу сторінку------');
        history.push('/user/add');
    }
  
    render() {
        <div>
            <td>
                <tr>
                    <li className="nav-item">
                        <Link className="text-light nav-link" to="/Application">Телохранитель</Link>
                    </li>
                </tr>
            </td>
            <div className="row text-center text-lg-left">
            </div>
        </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        list: get(state, 'user.list.data'),
        isListLoading: get(state, 'user.list.loading'),
        isListError: get(state, 'user.list.error')
    }
}

export default connect(mapStateProps)(Home);