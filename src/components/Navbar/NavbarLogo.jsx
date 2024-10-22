import logoImage from "../../assets/images/logo/ICrew.png";

export default function NavbarLogo() {
  return (
    <a href="index.html" className="navbar-logo block w-60 max-w-full px-4">
      <img src={logoImage} alt="logo" className="header-logo h-12" />
    </a>
  );
}
