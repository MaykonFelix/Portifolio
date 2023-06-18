import "./Portfolio.css";
import Card from "./Card";
import Portfolio_data from "./Portfolio_data";
import Typography from "@mui/material/Typography";

const Portfolio = () => {
  return (
    <>
      <div id="portfolio"></div>
      <section className="Portfolio top">
        <div className="container">
          <div className="heading text-center">
            <Typography component="h4">Bem Vindo</Typography>
            <Typography component="h1" fontWeight={"700"}>
              Portfolio
            </Typography>
          </div>

          <div className="content grid">
            {Portfolio_data.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.category}
                  totalLike={value.totalLike}
                  title={value.title}
                  description={value.description}
                  webLink={value.webLink}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
