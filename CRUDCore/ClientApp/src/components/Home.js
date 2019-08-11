import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './Modal.css';
import PropTypes from 'prop-types';
import get from 'lodash.get';
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
        // const listContent = this.props.list.map(item => {
        //     return (
        //         <div key={item.id} className="col-lg-3 col-md-4 col-6">
        //             <a href="#" className="d-block mb-4 h-100">
        //                 <img className="img-fluid img-thumbnail" src={item.image} alt="" />
        //             </a>
        //         </div>
        //     )
        // });
        return (
        <div>
            <div className="row text-center text-lg-left">
                {/* {listContent} */}
            </div>
        </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        list: get(state, 'animal.list.data'),
        isListLoading: get(state, 'animal.list.loading'),
        isListError: get(state, 'animal.list.error')
    }
}

export default connect(mapStateProps)(Home);