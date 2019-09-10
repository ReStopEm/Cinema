import React, { Component } from 'react';
import './Modal.css';
import { Link } from "react-router-dom";
class Home extends Component {
    state = {
        isShowModal: false,
    }
    componentDidMount() {
    }
    redirectToAddUser = (e) => {
        const { history } = this.props;
        e.preventDefault();
        console.log('-----перехід на іншу сторінку------');
        history.push('/user/add');
    }
    render() {
        return (
            <div>

                <li className="nav-item">
                    <Link style={{color: 'white'}} className="text-light nav-link"  to="/Application" >Телохранитель</Link>
                    
                </li>

                <div className="row text-center text-lg-left">
                </div>
            </div>
        );
    }
}



export default Home;