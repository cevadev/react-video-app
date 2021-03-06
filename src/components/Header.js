import React from 'react';

import PlatziVideoLogo from '../assets/images/logo-platzi-video-BW2.png';
import UserIcon from '../assets/images/user-icon.png'
import '../assets/styles/components/Header.scss';

function Header(){
    return(
        <header className="header">
            <img className="header__img" src={PlatziVideoLogo} alt="Platzi Video"/>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={UserIcon} alt=""/>
                    <p>Perfil</p>
                </div>
            <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
            </ul>
            </div>
        </header>
    );
}

export default Header