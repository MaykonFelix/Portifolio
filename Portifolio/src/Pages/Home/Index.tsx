
import Header from "../../components/Header";
import "./style.css";



export default function Index() {
    return (
        <div id="wrapper">

            <Header />
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

            <footer>Feito com ❤</footer>
        </div>
    )
}



