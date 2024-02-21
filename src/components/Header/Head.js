import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../Header/Headst.css';
import '../../App.css'

export default function Head() {
    const navigate = useNavigate();
    const location = useLocation();

    const isHome = location.pathname === '/home';
    const isIntroduce = location.pathname === '/introduce';
    const isHistory = location.pathname === '/history';
    const isSpace = location.pathname === '/Space';

    return (
        <header>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h1 
                    onClick={() => {navigate("/") }} 
                    style={{ marginLeft: '15rem',fontFamily:'CWDangamAsac-Bold'}}
                    className={`cursor ${isHome ? 'active' : ''} threeD`} // 클래스 추가
                >
                    삼디
                </h1>
                <nav>
                    <ul style={{ display: "flex", listStyle: "none", gap: "10rem", marginLeft: '2rem' }}>
                        <li 
                            className={`cursor ${isHome ? 'active' : ''}`} 
                            onClick={() => { navigate("/home") }}
                        >
                            Homes
                        </li>
                        <li 
                            className={`cursor ${isIntroduce ? 'active' : ''}`} 
                            onClick={() => { navigate("/introduce") }}
                        >
                            Samdi
                        </li>
                        <li 
                            className={`cursor ${isHistory ? 'active' : ''}`} 
                            onClick={() => { navigate("/history") }}
                        >
                            History
                        </li>
                    </ul>
                </nav>
                <h1 
                    onClick={() => { navigate("/Space") }} 
                    style={{ marginRight: '15rem', fontFamily:'PyeongChangPeace-Bold'
                    }}
                    className={`cursor ${isSpace ? 'active' : ''} Space`} // 클래스 추가
                >
                    스페이스
                </h1>
            </div>
        </header>
    );
}
