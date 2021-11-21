import React from 'react';
import '../../style/matches/Match.css'

function DoMatches({item}) {
    const {id, logo1, logo2, total} = item;
    const path1 = `http://localhost:3000/pictures/` + logo1 + ".png"
    const path2 = `http://localhost:3000/pictures/` + logo2 + ".png"
    return(
        <div className="match">
            <img src={path1} className="left_team"/>
            <p className="total">{total}</p>
            <img src={path2} className="right_team"/>
        </div>
    )
}

export default DoMatches;
