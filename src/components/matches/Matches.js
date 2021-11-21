import React from 'react';
import DoMatches from './DoMatches';
import '../../style/matches/Matches.css'

const match_list = [
    {
        id: 1,
        logo1: 'ManUtd',
        logo2: 'Everton',
        total: "2 - 0"
    },
    {
        id: 2,
        logo1: 'Arsenal',
        logo2: 'Everton',
        total: "1 - 1"
    },
    {
        id: 3,
        logo1: 'Chelsea',
        logo2: 'ManUtd',
        total: "0 - 2"
    },
    {
        id: 4,
        logo1: 'Liverpool',
        logo2: 'SKA_Habarovsk',
        total: "0 - 4"
    },
]

function Matches() {
    return (
        <div className='match_list'>
            {match_list.map(elem=><DoMatches key={elem.id} item={elem} />)}
        </div>
    )
}

export default Matches;