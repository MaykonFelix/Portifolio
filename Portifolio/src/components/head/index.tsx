import { useState } from "react"
import "./style.css"
import LogCatColor from "../pic/LogCatColor.png"

const Header = () => {
    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header?.classList.toggle("active", window.scrollY > 100)
    })
    // Toogle Menu
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <div id="home"></div>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={LogCatColor} alt='Logo' />
                        <h1>Maykon</h1>
                    </div>

                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>home</a>
                            </li>
                            <li>
                                <a href='#features'>Conhecimentos</a>
                            </li>
                            <li>
                                <a href='#portfolio'>Portfólio</a>
                            </li>
                            <li>
                                <a href='#resume'>Resumo</a>
                            </li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header