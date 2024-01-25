import Footer from "../pageComponents/footer";
import Header from "../pageComponents/header";
import Discover from "../pageComponents/Discover";
import Blog from "../pageComponents/BlogSpotlight";
import DbDiscover from "../pageComponents/DbDiscover";
import Faq from "../pageComponents/faq";

const Home = () => {
  return <>
    <Header />
    <Discover />
    <Blog />
    <DbDiscover />
    <Faq/>
    <Footer /></>;
};

export default Home;