import "./style.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
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

                        <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>COMO ME ENCONTAR</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-instagram'></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
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