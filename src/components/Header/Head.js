// Head.js
import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import '../Header/Headst.css';

export default function Head() {
    const history = useHistory();
    const location = useLocation();

    const isHome = location.pathname === '/home';
    const isIntroduce = location.pathname === '/introduce';
    const isHistory = location.pathname === '/history';
    const isSpace = location.pathname === '/Space';

    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            
            <h1 
                onClick={() => { history.push("/") }} 
                style={{ marginLeft: '15rem', fontFamily:'CWDangamAsac-Bold'}} 
                className={`cursor ${isHome ? 'active' : ''} threeD`} // 클래스 추가
            >
                삼디
            </h1>
            <nav>
                <ul style={{ display: "flex", listStyle: "none", gap: "10rem", marginLeft: '2rem' }}>
                    <li 
                        className={`cursor ${isHome ? 'active' : ''}`} 
                        onClick={() => { history.push("/home") }}
                    >
                        Home
                    </li>
                    <li 
                        className={`cursor ${isIntroduce ? 'active' : ''}`} 
                        onClick={() => { history.push("/introduce") }}
                    >
                        Samdi
                    </li>
                    <li 
                        className={`cursor ${isHistory ? 'active' : ''}`} 
                        onClick={() => { history.push("/history") }}
                    >
                        History
                    </li>
                </ul>
            </nav>
            <h1 
                onClick={() => { history.push("/Space") }} 
                style={{ marginRight: '15rem', fontFamily:'PyeongChangPeace-Bold'}} 
                className={`cursor ${isSpace ? 'active' : ''} Space`} // 클래스 추가
            >
                스페이스
            </h1>
        </header>
    );
}
