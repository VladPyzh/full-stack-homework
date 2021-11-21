import React from 'react';
import '../../style/sections/Section.css'


function DoSection({cur_page, item}) {
    console.log(cur_page)
    const {id, name} = item;
    if (id == cur_page) {
        return (
            <div>
                <p className="main_section">{name}</p>
            </div>
        )
    } else {
        return (
            <div>
                <p className="section">{name}</p>
            </div>
        )
    }


}

export default DoSection;