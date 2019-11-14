import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
//import Pagination from 'react-paginate';
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

        // let active = 2;
        // let items = [];
        // for (let number = 1; number <= 5; number++) {
        //     items.push(
        //         <Pagination.Item key={number} active={number === active}>
        //             {number}
        //         </Pagination.Item>,
        //     );
        // }

        // const paginationBasic = (
        //     <div>
        //         <Pagination>{items}</Pagination>
        //         <br />

        //         <Pagination size="lg">{items}</Pagination>
        //         <br />

        //         <Pagination size="sm">{items}</Pagination>
        //     </div>
        // );
        return (
            <div>
                <div className="horizontal-scroll-wrapper squares">

                    <div>
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
                            В&nbsp;главных&nbsp;ролях:&nbsp;Колин&nbsp;Фаррелл,Кира&nbsp;Найтли,Рэй&nbsp;<br />Уинстон,Дэвид&nbsp;Тьюлис,Анна&nbsp;Фрил,Бен&nbsp;Чаплин,<br />
                            Эдди Марсан,Санджив Бхаскар, Стивен Грэм,<br />Офелия Ловибонд<br /><br />
                            Гангстер по имени Митчелл знакомится с очаровательной<br /> киноактрисой Шарлоттой, которая является...
                   </p>
                    </div>

                    <div>
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
                    <div>
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
                    <div>item 4</div>
                    <div>item 5</div>
                    <div>item 6</div>
                    <div>item 7</div>
                    <div>item 8</div>
                    <p><a href="#top">Наверх</a></p>
                </div>
                {/* <div>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </div> */}
            </div>
        );
    }
}



export default Home;