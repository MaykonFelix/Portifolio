import "./style.css"
import hero from "../pic/hero.png"
import ReactLogo from "../pic/ReactLogo.png"
import NodeLogo from "../pic/NodeLogo.png"
import TSLogo from "../pic/TSLogo.png"
import MySQLogo from "../pic/MySQLogo.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
    return (
        <>
            <section className='hero' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h3>Bem vindo ao meu mundo</h3>
                        <h1>
                            Ola, eu sou <span>Maykon</span>
                        </h1>
                        <h2>
                            um
                            <span>
                                <Typewriter words={[" Desenvolvedor Web.", " Coder!"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={30} delaySpeed={1500} />
                            </span>
                        </h2>

                        <p>Ola, Obrigado por entrar em minha pagina, esta em construção, provavel que na proxima vez que voltar a sua experiencia vai ser diferente.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>COMO ME ENCONTAR</h4>
                                <div className='button'>

                                    <button className='btn_shadow'>
                                        <a
                                            href="https://github.com/MaykonFelix"
                                            target="_blank"
                                            className='fab fa-github'
                                        ></a>
                                    </button>

                                    <button className='btn_shadow'>
                                        <a
                                            href="https://www.linkedin.com/in/maykonfelixwebdeveloper/"
                                            target="_blank"
                                            className='fab fa-linkedin-in'
                                        ></a>
                                    </button>

                                    <button className='btn_shadow'>
                                        <a
                                            href="https://www.facebook.com/maykon.felix.1"
                                            target="_blank"
                                            className='fab fa-facebook-f'
                                        ></a>
                                    </button>

                                    <button className='btn_shadow'>
                                        <a
                                            href="https://www.instagram.com/maykon.felix.silva/"
                                            target="_blank"
                                            className='fab fa-instagram'
                                        ></a>
                                    </button>
                                </div>
                            </div>

                            <div className='col_1'>
                                <h4>MELHORES HABILIDADES</h4>
                                <button className='btn_shadow'>
                                    <img src={ReactLogo} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={NodeLogo} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={TSLogo} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={MySQLogo} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='Foto Pessoal' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home