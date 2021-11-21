import React from 'react';
import Main from './Main';
import Login from './Login';
import New from './New'
import '../style/body.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Routes>    
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/test_news" element={<New/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;