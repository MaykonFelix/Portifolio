import { useState } from "react"
import "./style.css"
import LogCatColor from "../pic/LogCatColor.png"



const Header = () => {
    // Fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        header?.classList.toggle("active", window.scrollY > 70)
    })

    // Toogle Menu
    const [Mobile, setMobile] = useState(false)


    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={LogCatColor} alt='Logo' />
                    </div>


                    <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
                            <li>
                                <a href='#home'>Home</a>
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
                            <button className='toggle' onClick={() => setMobile(!Mobile)}>
                                {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                            </button>

                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header