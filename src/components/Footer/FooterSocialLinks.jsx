import SvgComponent from "./SvgComponent";

const socialLinks = [
  {
    icon: "fb-icon",
    link: "javascript:void(0)",
  },
  {
    icon: "twitter-icon",
    link: "javascript:void(0)",
  },
  {
    icon: "insta-icon",
    link: "javascript:void(0)",
  },
  {
    icon: "linkedin-icon",
    link: "javascript:void(0)",
  },
];

export default function FooterSocialLinks() {
  return (
    <div className="-mx-3 flex items-center">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className="px-3 text-gray-7 hover:text-white"
        >
          <SvgComponent svgId={social.icon} key={index} />
        </a>
      ))}
    </div>
  );
}
