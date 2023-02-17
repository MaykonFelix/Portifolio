import React from 'react'

import logo1 from '../../assets/logo1.svg'
import specialButton from '../../assets/special-button.svg'
import avatar from '../../assets/avatar.svg'


export default function Header() {
    return (
        <header>
            <h1 className="left">
                <img src={logo1} alt="Logo" />
            </h1>

            <nav className="middle">
                <ul>
                    <li><a href="#">Solution</a></li>
                    <li><a href="#">Problems</a></li>
                    <li><a href="#">Price</a></li>
                </ul>
            </nav>

            <div className="right">
                <a className="conf">
                    <img src={specialButton} alt="Special Conference" />
                    <span>WoW !!!</span>
                </a>

                {/* https://getavataaars.com/ */}
                <img className="avatar" src={avatar} alt="Avatar" />
            </div>
        </header>
    )
}
