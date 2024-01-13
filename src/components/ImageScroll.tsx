import gsap from "gsap";
import { useRef } from "react";
import ImageCard from "./ImageCard";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleLeft";

const ImageScroll = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollImages = (direction: "next" | "prev") => {
    const tl = gsap.timeline();
    tl.to(scrollContainer.current, {
      x: direction === "next" ? "-=400" : "+=400",
      duration: 0.5,
      onComplete: () => {
        if (direction === "next") {
          tl.set(scrollContainer.current, { x: 0 });
        } else {
          tl.set(scrollContainer.current, { x: 1200 });
        }
      },
    });
  };
  return (
    <div className="relative overflow-x-auto whitespace-nowrap w-full h-[400px] overflow-hidden py-[50px]">
      <div className="flex gap-7" ref={scrollContainer}>
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
        <button onClick={() => scrollImages("prev")}>
          <ArrowCircleRightSharpIcon  fontSize="large" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={() => scrollImages("next")}>
          <ArrowCircleRightIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default ImageScroll;
