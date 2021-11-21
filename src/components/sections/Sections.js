import React from 'react';
import DoSection from './DoSection';
import '../../style/sections/Sections.css'
import Login_redir from './login/Login';

const topics = [
    {
        id: 1,
        name: 'Главная',
    },
    {
        id: 2,
        name: 'Аналитика',
    },
    {
        id: 3,
        name: 'Трансферы',
    },
    {
        id: 4,
        name: 'Состав',
    },
    {
        id: 5,
        name: 'История',
    }
]

function Sections({cur_section}) {
    return (
        <div className="block">
            <div className='section_list'>
                {topics.map(elem=><DoSection cur_page={cur_section} item={elem}/>)}
                
            </div>
            <div className='login'>
                <Login_redir />
            </div>
        </div>

    )
}

export default Sections;