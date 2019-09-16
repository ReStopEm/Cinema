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
            <div className="container-fluid">
                <li className="nav-item">
                <Link style={{ color: 'white'}} className="text-light nav-link" to="/Application" >Телохранитель</Link>
                <Link  className="foto" to="/Application" ></Link>
                <p className="text1" >Название:&nbsp;Телохранитель<br/>
                      Оригинальное&nbsp;название:&nbsp;London&nbsp;Boulevard<br/>
                      Год:&nbsp;2010<br/>
                      Страна:&nbsp;США,&nbsp;Великобритания<br/>
                      Слоган:&nbsp;«Not&nbsp;every&nbsp;criminal&nbsp;wants&nbsp;to&nbsp;be&nbsp;one.»<br/>
                      Режиссер:&nbsp;Уильям&nbsp;Монахэн<br/>
                      Жанр:&nbsp;Драмы,Криминальные<br/>
                      Время:&nbsp;01:40:23<br/>
                      Цикл:&nbsp;Фильмы&nbsp;про&nbsp;преступников<br/>
                      Доп.язык озвучки:&nbsp;Английский<br/>
                      В&nbsp;главных&nbsp;ролях:&nbsp;Колин&nbsp;Фаррелл,Кира&nbsp;Найтли,Рэй&nbsp;<br />Уинстон,Дэвид&nbsp;Тьюлис,Анна&nbsp;Фрил,Бен&nbsp;Чаплин,
                      Эдди&nbsp;Марсан,Санджив&nbsp;Бхаскар,&nbsp;Стивен&nbsp;Грэм,<br />Офелия&nbsp;Ловибонд<br/><br/>Гангстер по имени Митчелл знакомится с очаровательной киноактрисой Шарлоттой, которая является очень ранимой натурой, поэтому вынуждена всегда скрываться от папараци и прочих преследователей. Митч отчаянно хочет порвать со своим прошлым и находит утешение в этой милой девушке, для которой готов сделать все. Однако, криминальный мир не спешит расставаться с таким профессионалом, как Митч.</p>
                
                <br/><br/><br/>
                <Link style={{ color: 'white'}} className="text-light nav-link" to="/film" >Макс Стіл</Link>
                <Link  className="foto1" to="/film" ></Link>
                    <p className="text2" >
                        Название:&nbsp;Max&nbsp;Steel
                        <br/><br/>
                        Год&nbsp;выхода:&nbsp;2016
                        <br/><br/>
                        Актеры:&nbsp;Бен&nbsp;Уинчелл,Джош&nbsp;Бренер,Мария&nbsp;Белло,
                        Энди&nbsp;Гарсиа,Ана&nbsp;Вийафанья
                        Режиссер:&nbsp;Стюарт&nbsp;Хендлер
                        <br/><br/>
                        Страна:&nbsp;Великобритания,&nbsp;США
                        <br/><br/>
                        Жанр:&nbsp;Фильмы,&nbsp;Боевики,&nbsp;Приключения,
                        Семейные,&nbsp;Фантастика,&nbsp;Фэнтези
                        <br/><br/>
                        Сюжет данной картины закручен вокруг необычного подростка по имени Макс МакГрат. Главный герой "Макса Стила" однажды обнаруживает за собой уникальную способность генерировать мощную энергию, которая является неповторимой в своем роде во всей Вселенной.
Подросток вынужден встретиться с единственным существом, способным совладать с такой мощной энергией — таинственным техноорганическим инопланетянином по имени Стил. Эта встреча кардинальным образом изменит жизнь не только нашего мальчика-подростка, но и возможно всего человечества.

                    </p>
                </li>
            
                <div className="row text-center text-lg-left">
                </div>

            </div>
        );
    }
}



export default Home;