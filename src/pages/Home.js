import Discover from "../pageComponents/home/Discover";
import Blog from "../pageComponents/home/BlogSpotlight";
import DbDiscover from "../pageComponents/home/DbDiscover";
import Faq from "../pageComponents/faq";

const Home = () => {
  return <>
    <Discover />
    <Blog />
    <DbDiscover />
    <Faq/>
    </>;
};

export default Home;