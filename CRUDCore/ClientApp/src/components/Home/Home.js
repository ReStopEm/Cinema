import React, { Component } from 'react';
import './Home.css';
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
        //console.log($"{u.Id}.{u.UserName} - {u.Email}");
        return (
            <div>
                <div className="horizontal-scroll-wrapper squares">

                    <div className="BackToFilm">
                        <p>Телохранитель</p>
                        <Link className="foto" to="/Application" ></Link>
                        <p>(Год:&nbsp;2010)</p>
                    </div>

                    <div className="BackToFilm">
                        <p>Макс Стіл</p>
                        <Link className="foto1" to="/film" ></Link>
                    </div>
                    <div className="BackToFilm">
                        <p>Исходний код</p>
                        <Link className="foto2" to="/film" ></Link>
                    </div>
                    <div className="BackToFilm">item 4</div>
                    <div className="BackToFilm">item 5</div>
                    <div className="BackToFilm">item 6</div>
                    <div className="BackToFilm">item 7</div>
                    <div className="BackToFilm">item 8</div>

                </div>
                <p ><Link to="#top">Наверх</Link></p>
            </div>
        );
    }
}



export default Home;