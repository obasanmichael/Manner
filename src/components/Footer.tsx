import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "./Button";
import { NavLinks } from "../constants";
import { Link } from "react-router-dom";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <div className="h-[100vh] py-[50px] flex flex-col space-y-[300px]">
        <div className="flex flex-col-reverse gap-y-3 md:flex-row justify-between">
          <div className="flex flex-col lg:flex-row space-y-[35px] lg:space-y-0 lg:space-x-[70px]">
            <div className="text-white space-y-4">
              <p className="hidden md:block md:text-2xl">Contact</p>
              <p>91 Wimpole Street, London W1G 0EF</p>
              <div className="space-x-2">
                <LinkedInIcon />
                <InstagramIcon />
                <Button textColor="text-black" bgColor="bg-white" path="/">
                  hellow@manner.co
                </Button>
              </div>
            </div>
            <div className="flex flex-row space-x-[70px]">
              <div className=" text-white flex flex-col space-y-2">
                <p className="font-bold">Explore</p>
                {NavLinks.map((link) => (
                  <Link
                    className="text-sm font-light hover:underline"
                    key={link.key}
                    to={link.path}
                  >
                    <p>{link.label}</p>
                  </Link>
                ))}
              </div>
              <div className="text-white flex flex-col space-y-2">
                <p className="font-bold">Legal</p>
                <p className="text-sm font-light hover:underline">
                  Privacy Policy
                </p>
                <p className="text-sm font-light hover:underline">
                  Cookie Notice
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="max-w-[300px] md:max-w-full text-3xl text-white">
              <span className="md:block">
                Sign up to our <span className=" underline">newsletter</span>
              </span>{" "}
              to stay in the know
            </p>
            <div className="flex flex-row max-w-[300px] md:max-w-full bg-white px-1 border text-center border-black rounded-full ">
              <input
                className="py-1 px-4 font-light w-full rounded-full outline-none text-sm"
                placeholder="Email address"
                type="text"
              />
              <ArrowCircleRightIcon className="z-10" />
            </div>
          </div>
        </div>
        <div className="">
          <p className="block text-right text-white font-light text-sm mb-[100px]">
            ©Manner 2023
          </p>
          <p className="text-[26vw] text-center text-white text-4xl pr-5">Manner</p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
