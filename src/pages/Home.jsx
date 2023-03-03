import Info from "../components/home/Info";
import Intro from "../components/home/Intro";
import Specials from "../components/home/Specials";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <main>
      <Intro />
      <Specials />
      <Testimonials />
      <Info />
    </main>
  );
};

export default Home;
