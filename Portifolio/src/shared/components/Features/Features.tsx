import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <div id="features"></div>
      <section className='features top'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>Conhecimentos</h4>
            <h1>O que faço</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
