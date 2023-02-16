
import "./style.css";

import MySVG from '../../assets/logo1.svg'


export default function Index() {
    return (
        <div id="wrapper">
            <header>
                <h1 className="left">
                    <img src={MySVG} alt="Logo" />
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
                        <img src="assets/special-button.svg" alt="Special Conference" />
                        <span>WoW !!!</span>
                    </a>

                    {/* https://getavataaars.com/ */}
                    <img className="avatar" src="assets/avatar.svg" alt="Avatar" />
                </div>
            </header>

            <main>

                <h1>
                    <span>Developer.</span>
                    <span>Maykon.</span>
                    <span>Felix.</span>
                </h1>

                <div className="buttons">
                    <button>Coding</button>
                    <button className="outlined">Get a Demo</button>
                </div>

                <h2>Project to learn about animation of gradients. A very beautiful thing to see.</h2>


            </main>

            <footer>Explore the Vercel way</footer>
        </div>
    )
}



