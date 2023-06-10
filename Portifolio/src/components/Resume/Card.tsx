
interface propsCard {
  id?: number;
  category?: string;
  year: string;
  title: string;
  desc: string;
}

const Card = (props: propsCard) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>
        </div>
        <hr />
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
