import NavLinks from "./NavLinks";
import logo from "../images/dan-logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img width={50} height={70} className="logo" src={logo} alt="Danaendraraj R' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
