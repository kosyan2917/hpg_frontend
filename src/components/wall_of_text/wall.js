import './wall.css'

const Wall = ({num}) => {
    if (num===1) {
        return <div className={'text1'}>
            <ul>
                <li> Каждый участник начинает с клетки ""Старт"". </li>
                <li> Для перемещения по клеткам используются 2 кубика d6. </li>
                <li> Попадая на клетки с играми, участник должен нароллить игру на сайте ролла игр с указанными особенностями. </li>
                <li> За прохождение игры по указанным особенностям участник получает очки в зависимости от награды. </li>
                <li> Игровое поле поделено на 4 награды (левая - 1 поинт, верхняя - 2 поинта, правая - 3 поинта, нижняя 4 поинта).</li>
                <li> На клетках ""Шанс"" участник роллит игру без каких-либо особенностей, награда за прохождение игры соответствует части поля.</li>
                <li> Если стример попадает на клетку ""Старт"" по итогу броска кубика, он делает шаг вперед (Разогревочная), если на ""Тюрьму"" - шаг назад (Для умов выше среднего),</li> если на любую клетку ""Подлянка\Кайфарик"", то сначала активирует событие, и если оно не связано с перемещением на другую клетку, то делает шаг вперед."</ul>
        </div>
    } else if (num===2) {
        return <div className={'text2'}>
            <ul>
                <li> За преодоление всего игрового поля, участник получает 5 поинтов. Подробнее об этом в разделе ""Правила"" пункт 15.</li>
                <li> Участник оказывается на клетке ""Тюрьма"" если дропает игру. В этом случае ему все же необходимо пройти игру со следующими условиями: 6-16 часов; 1-60 оценка. За прохождение этой игры поинты не начисляются. Если участник дропает игру на клетке ""Тюрьма"", он теряет 2 поинта за каждый дроп. Из ""Тюрьмы"" можно сбежать без прохождения игры. Подробнее об этом в разделе ""Правила"" пункт 16. </li>
                <li> На клетке ""Игры ото всех-всех-всех"" участник генерирует случайное число для выбора игры из заранее созданного списка. Номинальная награда прохождения игры 2 поинта. </li>
            </ul>
        </div>
    } else {
        return <div className={'text3'}>
                    <ul>
                        <li> На клетке ""Пресетики"" участник сначала указывает на сайте Random.org диапазон от 1 до 31, что соответствует количеству уникальных пресетов на сайте, после чего роллит игру из пресета, соответствующему выпавшему числу на рандом.орг. Номинальная награда за прохождение игры на клетке ""Пресетики"" - 3 поинта. Как и в случае с клеткой ""Игры ото всех-всех-всех"", работают те же взаимодействия с главным судьей. </li>
                        <li> На клетках ""Подлянка\Кайфарик"", участник покрутит колесо из особых событий, которые облегчат или усложнят ему прохождение ивента. Данные события не совпадают с событиями\предметами с колеса приколов. </li>
                        <li> Победитель определяется по итоговому количеству поинтов. Если два и более участников имеют одинаковые поинты, победителем становится тот, кто прошел больше игр. Если и тут поровну - bo3 СФов на миду без хилок." </li>
                    </ul>
            </div>
    }
}

export default Wall