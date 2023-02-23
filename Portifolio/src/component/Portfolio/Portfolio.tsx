import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISITA MEU PORTIFOLIO E DEIXE SEU FEEDBACK</h4>
            <h1>Meu Portfolio <span> (Em Construção) </span></h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} description={value.description} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
