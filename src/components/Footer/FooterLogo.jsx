import logoImage from "../../assets/images/logo/ICrew.png";

export default function FooterLogo() {
  return (
    <a href="javascript:void(0)" className="mb-6 inline-block  max-h-[100px]">
      <img src={logoImage} alt="logo" className="footer-logo h-12" />
    </a>
  );
}
