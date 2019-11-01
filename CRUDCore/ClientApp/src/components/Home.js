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
            <div >
                <div className="border" >
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
                        В&nbsp;главных&nbsp;ролях:&nbsp;Колин&nbsp;Фаррелл,Кира&nbsp;Найтли,Рэй&nbsp;<br />Уинстон,Дэвид&nbsp;Тьюлис,Анна&nbsp;Фрил,Бен&nbsp;Чаплин,
                        Эдди&nbsp;Марсан,Санджив&nbsp;Бхаскар,&nbsp;Стивен&nbsp;Грэм,<br />Офелия&nbsp;Ловибонд<br /><br />Гангстер по имени Митчелл знакомится с очаровательной киноактрисой Шарлоттой, которая является очень ранимой натурой, поэтому вынуждена всегда скрываться от папараци и прочих преследователей. Митч отчаянно хочет порвать со своим прошлым и находит утешение в этой милой девушке, для которой готов сделать все. Однако, криминальный мир не спешит расставаться с таким профессионалом, как Митч.</p>
                        </div>
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
                        Сюжет данной картины закручен вокруг необычного подростка по имени Макс МакГрат. Главный герой "Макса Стила" однажды обнаруживает за собой уникальную способность генерировать мощную энергию, которая является неповторимой в своем роде во всей Вселенной.
Подросток вынужден встретиться с единственным существом, способным совладать с такой мощной энергией — таинственным техноорганическим инопланетянином по имени Стил. Эта встреча кардинальным образом изменит жизнь не только нашего мальчика-подростка, но и возможно всего человечества.
                </p>
                </div>
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
                        Капитан Колтер Стивенс оказывается в поезде, в теле другого человека – парня по имени Шон Фентресс. Однако прежде чем он понимает что происходит, взрыв бомбы, заложенной в поезде, уничтожает его.
                        Стивен приходит в себя внутри какой-то капсулы, где с помощью компьютера к нему обращается женщина в военной форме Коллин Гудвин. Она сообщает, что Колтер находится внутри программы «Исходный код», с помощью которой его вселяют в тело человека в последние восемь минут его жизни.
                        Стивенса раз за разом перемещают в тело другого человека, снова и снова он вынужден переживать чужую смерть, пока не найдет кто и где установил бомбу.
                </p>
                </div>
                    <div className="row text-center text-lg-left">
                    </div>
                </div  >
                <br/> <br/>
            <div>
                <footer className="footer" >Новые сериалы на CiNeMa
                Зарубежные сериалы,филмы становятся неотъемлемой частью жизни современного человека. Они являются культурным феноменом и отражены в шутках, мемах, фанатском творчестве, а их персонажей можно встретить на билбордах и в рекламе. Быть сериаломаном в наши дни не только интересно, но и полезно, ведь в таком случае ты всегда сможешь обсудить популярный сериал с друзьями и коллегами.

                Именно поэтому наша команда ежедневно проверяет все русскоязычные ресурсы и добавляет свежие эпизоды по мере их выхода. Специально для вас мы следим за качеством контента, стараясь сделать ваше пребывание на сайте максимально комфортным. Для этого используется самый быстрый и удобный плеер, который позволяет просматривать сериалы в HD. Релизы отличаются от самых оперативных, одноголосых или двухголосых, до самых профессиональных. Некоторые сериалы имеют официальный многоголосый дубляж от студий. У нас вы найдете озвучки LostFilm, ColdFilm, BaibaKo.tv, NewStudio, Кубик в Кубе, AlexFilm, Jaskier, Амедиа, Кураж-Бамбей, Sunshine Studio, Netflix и множество других релиз-групп, а также сериалы в оригинале и субтитры на русском и английском языках.

                А главное, вы можете не только посмотреть любимые сериалы онлайн.Все дороги ведут на CiNeMa— лучшие сериалы в жанре драма, комедия, ситком, детектив, романтика, криминал, триллер, ужасы, ромком, подростковые сериалы и многое другое. Смотрите новые сериалы 2019 года в свободном доступе без блокировок — только в хорошем качестве и с самой топовой озвучкой!</footer>
            </div>
            </div>
        );
    }
}



export default Home;