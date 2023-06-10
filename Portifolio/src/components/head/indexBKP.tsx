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

    console.log(setMobile + " Aqui é o setMobile")
    console.log(Mobile + " Aqui é o Mobile")

    return (
        <>
            <div id="home"></div>

            <header className='header'>
                <div className='container d_flex'>
                    <div className='logo'>
                        <img src={LogCatColor} alt='Logo' />
                    </div>

                    <div className='navlink'>
                        <ul
                            className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>

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

                            <button
                                className='toggle'>
                                <i className="fa fa-bars"></i>

                                {/* {Mobile ? <i className='fa fa-bars'></i> : <i className='fa fa-bars'></i>} */}

                            </button>

                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header