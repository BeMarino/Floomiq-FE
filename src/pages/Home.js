import Footer from "../pageComponents/footer";
import Header from "../pageComponents/header";

const Home = () => {
  return <>
    <Header />
    <div className="discover" >
      <div className="bg-text">
        <h1>Discover the world <br />
          of plants with us</h1>
        <h5 style={{ fontWeight: "lighter" }}>Explore our extensive plant database and find the perfect plants
          <br />for your garder. With over 30.000 plants to choosefrom, you'll have all
          <br />the information you need to create beautiful and thriving garder.
        </h5>
      </div>
    </div>
    <div className="discover-row">
      <div>
        <h1>Discover the world <br />
          of plants with us</h1>
        <h5 style={{ fontWeight: "lighter" }}>Explore our extensive plant database and find the perfect plants
          <br />for your garder. With over 30.000 plants to choosefrom, you'll have all
          <br />the information you need to create beautiful and thriving garder.
        </h5>
      </div>

      <div>image</div>
    </div>
    <Footer /></>;
};

export default Home;