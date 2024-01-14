import ImageCard from "./ImageCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleLeft";

const ImageScroll = () => {

  return (
    <div className="relative overflow-x-auto whitespace-nowrap w-[110%] h-[400px] overflow-hidden py-[50px]">
      <div className="flex gap-7">
        <ImageCard img_url="src/assets/About.jpg" path="/about" label="About" />
        <ImageCard
          img_url="src/assets/Projects_img.jpg"
          path="/project"
          label="Project"
        />
        <ImageCard
          img_url="src/assets/People_img.jpg"
          path="/people"
          label="People"
        />
        <ImageCard img_url="src/assets/News.png" path="/news" label="News" />
        <ImageCard
          img_url="src/assets/Contact.jpg"
          path="/contact"
          label="Contact"
        />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button >
          <ArrowCircleRightSharpIcon  fontSize="large" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button >
          <ArrowCircleRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default ImageScroll;
