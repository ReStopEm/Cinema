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
            <div  >
                <div >
                    <div className="divf1" >
                        <div className="border2">
                            <Link className="foto" to="/Application" ></Link>
                            <p className="text" >Название:&nbsp;Телохранитель<br />
                                Оригинальное&nbsp;название:&nbsp;London&nbsp;Boulevard<br />
                                Год:&nbsp;2010<br />
                                Страна:&nbsp;США,&nbsp;Великобритания<br />
                                Слоган:&nbsp;«Not&nbsp;every&nbsp;criminal&nbsp;wants&nbsp;to&nbsp;be&nbsp;one.»<br />
                                Режиссер:&nbsp;Уильям&nbsp;Монахэн<br />
                                Жанр:&nbsp;Драмы,Криминальные<br />
                                Время:&nbsp;01:40:23<br />
                                Цикл:&nbsp;Фильмы&nbsp;про&nbsp;преступников<br />
                                Доп.язык озвучки:&nbsp;Английский<br />
                            В&nbsp;главных&nbsp;ролях:&nbsp;Колин&nbsp;Фаррелл,Кира&nbsp;Найтли,Рэй&nbsp;<br />Уинстон,Дэвид&nbsp;Тьюлис,Анна&nbsp;Фрил,Бен&nbsp;Чаплин,<br/>
                        Эдди Марсан,Санджив Бхаскар, Стивен Грэм,<br />Офелия Ловибонд<br /><br />
                        Гангстер по имени Митчелл знакомится с очаровательной<br /> киноактрисой Шарлоттой, которая является...
                       </p>
                        </div>
                    </div>

                    <div className="divf2" >
                        <div className="border2" >
                            <Link className="foto1" to="/film" ></Link>
                            <p className="text" >
                                Название:&nbsp;Max&nbsp;Steel
                        <br /><br />
                                Год&nbsp;выхода:&nbsp;2016
                        <br /><br />
                                Актеры:&nbsp;Бен&nbsp;Уинчелл,Джош&nbsp;Бренер,Мария&nbsp;Белло,
                                Энди&nbsp;Гарсиа,Ана&nbsp;Вийафанья
                                Режиссер:&nbsp;Стюарт&nbsp;Хендлер
                        <br /><br />
                                Страна:&nbsp;Великобритания,&nbsp;США
                        <br /><br />
                                Жанр:&nbsp;Фильмы,&nbsp;Боевики,&nbsp;Приключения,
                                Семейные,&nbsp;Фантастика,&nbsp;Фэнтези
                         <br /><br />
                         Сюжет данной картины закручен вокруг необычного подростка по имени Макс МакГрат...     
                            </p>
                        </div>
                    </div>

                   <div className="divf3" >
                        <div ></div>
                        <div className="border2">
                            <Link className="foto2" to="/film" ></Link>
                            <p className="text">
                                Год&nbsp;выпуска:&nbsp;2011
                        <br />
                                Страна:&nbsp;США,&nbsp;Канада
                        <br />
                                Жанр:&nbsp;фантастика,&nbsp;боевик,&nbsp;триллер,&nbsp;драма
                        <br />
                                Качество:&nbsp;Full&nbsp;HD&nbsp;1080
                        <br />
                                Перевод:&nbsp;Дублированный
                        <br />
                                Продолжительность:&nbsp;01:33
                        <br />
                                Режиссер:&nbsp;Дункан&nbsp;Джонс
                        <br />
                                В&nbsp;ролях:&nbsp;Джейк&nbsp;Джилленхол,Мишель&nbsp;Монахэн
                                Вера&nbsp;Фармига,&nbsp;Джеффри&nbsp;Райт,Майкл&nbsp;Арден
                                Кэс&nbsp;Анвар,Расселл&nbsp;Питерс,Брент&nbsp;Скэгфорд
                                Крэйг&nbsp;Томас,Гордон&nbsp;Мастен
                        <br /><br />
                        Капитан Колтер Стивенс оказывается в поезде, в теле другого человека... 
             </p>
                        </div>
                    </div> 
                    <div className="row text-center text-lg-left">
                    </div>
                </div  >
                <br /> <br />
               
            </div>
        );
    }
}



export default Home;