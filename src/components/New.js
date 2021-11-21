import React from 'react';
import Sections from './sections/Sections';
import New_body from './new/New_body'


function New() {
    return (
        <div className="New">
            <Sections cur_section='0'/>
            <New_body />
        </div>
    )
}

export default New;