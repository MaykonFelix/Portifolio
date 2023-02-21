import { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTATO</h4>
            <h1>ENTRE EM CONTATO!!!</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Maykon Felix</h1>
                  <p>Web Developer</p>
                  <p>Será uma honra poder lhe atender. Muito Obrigado!</p> <br />
                  <p>Phone: +55 43 9 9111-4539</p>
                  <p>Email: equipefelixx@gmail.com</p> <br />
                  <span>COMO ME ENCONTAR</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <a href="https://www.facebook.com/maykon.felix.1" target="_blank" className='fab fa-facebook-f'></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://www.instagram.com/maykon.felix.silva/" target="_blank" className='fab fa-instagram'></a>
                    </button>
                    <button className='btn_shadow'>
                      <a href="https://www.linkedin.com/in/maykonfelixwebdeveloper/" target="_blank" className='fab fa-linkedin-in'></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>Seu Nome</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>Telefone</span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>E-MAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>Titulo </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>Sua Mensagem </span>
                  <textarea cols={30} rows={10} name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  ENVIAR MENSAGEM <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
