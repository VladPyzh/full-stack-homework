import React from 'react';
import Sections from './sections/Sections';
import News from './news/News';
import Matches from './matches/Matches';

function Main() {
    return (
        <div className="Main">
            <Sections cur_section='1'/>
            <News />
            <Matches />
        </div>
    )
}

export default Main;