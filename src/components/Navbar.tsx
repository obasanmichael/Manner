import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" py-5 flex justify-between">
      <Link className="text-[#fff] text-4xl font-light" to="/">
        Manner
      </Link>

      <ul className="hidden lg:flex h-full gap-4">
        {NavLinks.map((link) => (
          <Button textColor="text-black" bgColor="bg-[#fff]" path={link.path}>
            <NavLink key={link.key} to={link.path}>
              {link.label}
            </NavLink>
          </Button>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
