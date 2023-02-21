import "./style.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/React.png"
import skill2 from "../pic/Node.png"
import skill3 from "../pic/TS.png"
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

                                    <button className='btn_shadow'>
                                        <a
                                            href="https://www.linkedin.com/in/maykonfelixwebdeveloper/"
                                            target="_blank"
                                            className='fab fa-linkedin-in'
                                        ></a>
                                    </button>

                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>MELHORES HABILIDADES</h4>
                                <button className='btn_shadow'>
                                    <img src={skill1} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home