import React, { Component } from 'react';
import './test.css';
import './Modal';
import { Link } from "react-router-dom";
class Test extends Component {
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
            <div class="horizontal-scroll-wrapper squares">
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
            <div>item 2</div>
            {/* <div>item 3</div>
            <div>item 4</div>
            <div>item 5</div>
            <div>item 6</div>
            <div>item 7</div>
            <div>item 8</div>   */}
        </div>
        );
    }
}



export default Test;