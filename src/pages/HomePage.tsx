import Container from "../components/Container";
import Footer from "../components/Footer";
import Heroe from "../components/Heroe";
import ImageScroll from "../components/ImageScroll";
import Navbar from "../components/navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-[40px]">
        <Heroe />
        <ImageScroll />
      </main>
      <Container backgroundColor="bg-[#353535]">
        <Footer backgroundColor="bg-[#353535]" textColor="text-[#efe3de]" />
      </Container>
    </div>
  );
};

export default HomePage;
