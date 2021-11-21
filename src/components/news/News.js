import React from 'react';
import DoNews from './DoNews';
import '../../style/news/News.css'

const news_list = [
    {
        id: 1,
        head: 'Всенародно известный и недооцененный',
        content: 'Умер Валерий Гаркалин. Антон Долин — о жизни и творчестве актера, ставшего звездой в кинематографическом безвременье 1990-х',
        link: "https://placepic.ru/wp-content/uploads/2021/01/image_86041216002543879135.gif"
    },
    {
        id: 2,
        head: '«Теперь вообще никуда не доберешься»',
        content: 'В Москве поменяли 200 автобусных маршрутов. В мэрии считают, что перемещаться по городу станет удобнее, жители просят вернуть как было',
        link: "https://s.fishki.net/upload/users/2020/01/13/329950/e630ff2451f3bb56c7bbdf85b1846d32.gif"
    },
    {
        id: 3,
        head: '«Земля, одержимая демонами» Моники Блэк',
        content: 'Исследование американского историка о всплеске веры в колдовство, охватившее послевоенную Германию, которое неожиданно оказывается чем-то большим',
        link: "https://www.youtube.com/watch?v=E4WlUXrJgy4"
    },
    {
        id: 4,
        head: 'Как мы можем влиять на глобальное потепление?',
        content: 'Простые ответы на сложные вопросы об углеродном следе',
        link: "https://www.youtube.com/watch?v=E4WlUXrJgy4"
    },
    {
        id: 5,
        head: 'Что смотреть в кино: «Последняя дуэль», «Французский вестник», «Король Ричард»',
        content: 'Ультракороткие рецензии (140 символов!) на главные фильмы недели',
        link: "https://www.youtube.com/watch?v=E4WlUXrJgy4"
    }
]

function News() {
    return (
        <div className='news_block'>
            <h2 id="news_header">Новости клуба</h2>
            <hr></hr>
            <div className='news_list'>
                {news_list.map(elem=><DoNews key={elem.id} item={elem} />)}
            </div>
        </div>
    )
}

export default News;