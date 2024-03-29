import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <div id="resume"></div>
      <section className='Resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Experiências</h4>
            <h1>Resumo</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>anos 3+</h4>
                <h1>Educação</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}

              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>anos 2+</h4>
                <h1>Trabalhos</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
