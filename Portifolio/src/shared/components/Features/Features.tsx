import "./Features.css";
import data from "./Features-Api";
import Card from "./Card";
import Typography from "@mui/material/Typography";

const Features = () => {
  return (
    <>
      <div id="features"></div>
      <section className="features top">
        <div className="container">
          <div className="heading text-center">
            <Typography component="h4">O que faço</Typography>
            <Typography component="h1" fontWeight={"700"}>
              Conhecimentos
            </Typography>
          </div>

          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
