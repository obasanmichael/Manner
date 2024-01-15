import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../../constants";
import Button from "../Button";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "../Container";

const Navbar = () => {
  return (
    <Container backgroundColor="bg-[#353535]">
      <nav className="flex justify-between">
        <Link className="text-[#efe3de] text-4xl font-light" to="/">
          Manner
        </Link>
        <ul className="hidden md:flex h-full gap-3">
          {NavLinks.map((link) => (
            <NavLink key={link.key} to={link.path}>
              <Button
                textColor="text-black"
                bgColor="bg-[#efe3de]"
                path={link.path}
              >
                {link.label}
              </Button>
            </NavLink>
          ))}
        </ul>
        <button className="md:hidden">
          <MenuIcon className="text-white" />
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
