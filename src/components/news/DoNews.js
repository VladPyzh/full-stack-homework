import React from 'react';
import '../../style/news/New.css'


function DoNews({item}) {
    const {id, head, content, link} = item;
    return (
        <div>
            <h3 className="new_header">{head}</h3>
            <p className="content">{content}</p>
            <a classname="details" href={link}>Подробнее...</a>
        </div>
    )
}

export default DoNews;