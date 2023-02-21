
interface CardProps {
  title: string;
  desc: string;
  image: string;
  id?: number;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div className='box btn_shadow'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card
