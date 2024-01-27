import Discover from "../pageComponents/Discover";
import Blog from "../pageComponents/BlogSpotlight";
import DbDiscover from "../pageComponents/DbDiscover";
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