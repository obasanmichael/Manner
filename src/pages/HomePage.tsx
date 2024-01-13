import Footer from "../components/Footer";
import Heroe from "../components/Heroe";
import ImageScroll from "../components/ImageScroll";
import Navbar from "../components/navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
          <main className="pt-[70px]">
        <Heroe />
        <ImageScroll/>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
