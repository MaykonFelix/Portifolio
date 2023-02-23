import { useState } from "react"

interface propsModal {
  image: string;
  category: string;
  totalLike: string;
  title: string;
  description?: string;
  webLink: string;
}

const Card = (props: propsModal) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>

        <div className='img'>
          <img src={props.image} alt='Construction' onClick={toggleModal} />
        </div>

        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            {props.totalLike}
          </label>
        </div>

        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i className='fas fa-arrow-right'></i>
          </a>
        </div>

      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>

          <div onClick={toggleModal} className='overlay'></div>

          <div className='modal-content d_flex'>

            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>

            <div className='modal-text right'>
              <span>{props.category}</span>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
              <div className='button f_flex mtop'>

                <a href={props.webLink} target="_blank">
                  <button className='btn_shadow'>
                    Projeto<i className='fas fa-chevron-right'></i>
                  </button>
                </a>


              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </div>
        </div >
      )
      }
    </>
  )
}

export default Card
