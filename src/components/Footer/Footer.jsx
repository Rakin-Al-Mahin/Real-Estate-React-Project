import FooterLogo from "./FooterLogo";
import FooterLinkGroup from "./FooterLinkGroup";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterBlog from "./FooterBlog";

export default function Footer() {
  const aboutUsLinks = [
    {
      topic: "Home",
      link: "javascript:void(0)",
    },
    {
      topic: "Features",
      link: "javascript:void(0)",
    },
    {
      topic: "About",
      link: "javascript:void(0)",
    },
  ];
  const featuresLinks = [
    {
      topic: "How it works",
      link: "javascript:void(0)",
    },
    {
      topic: "Privacy policy",
      link: "javascript:void(0)",
    },
    {
      topic: "Terms of Service",
      link: "javascript:void(0)",
    },
    {
      topic: "Refund policy",
      link: "javascript:void(0)",
    },
  ];

  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <FooterLogo />
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
            </div>

            <FooterSocialLinks />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <FooterLinkGroup title="About Us" links={aboutUsLinks} />
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <FooterLinkGroup title="Features" links={featuresLinks} />
          </div>
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <FooterBlog />
          </div>
        </div>
      </div>
    </footer>
  );
}
