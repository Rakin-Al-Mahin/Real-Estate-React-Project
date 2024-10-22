import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SvgComponent from "./SVGComponent";

export default function Contact() {
  const contactDetails = [
    {
      icon: <SvgComponent svgId={"location-icon"} />,
      title: "Our Location",
      info: "401 Broadway, 24th Floor, Orchard Cloud View, London",
    },
    {
      icon: <SvgComponent svgId={"email-icon"} />,
      title: "How Can We Help?",
      info: ["info@yourdomain.com", "contact@yourdomain.com"],
    },
  ];

  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id="contact" className="relative py-20 md:py-[120px]">
        <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
        <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
        <div className="container px-4">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div className="ud-contact-content-wrapper">
                <div className="ud-contact-title mb-12 lg:mb-[150px]">
                  <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                    CONTACT US
                  </span>
                  <h2 className="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                    Let&apos;s talk about your problem.
                  </h2>
                </div>
                <div className="mb-12 flex flex-wrap justify-between lg:mb-0">
                  {contactDetails.map((detail, index) => (
                    <div key={index} className="mb-8 flex w-[330px] max-w-full">
                      <div className="mr-6 text-[32px] text-primary">
                        {detail.icon}
                      </div>
                      <div>
                        <h5 className="mb-6 text-lg font-semibold text-dark dark:text-white">
                          {detail.title}
                        </h5>
                        {Array.isArray(detail.info) ? (
                          detail.info.map((email, idx) => (
                            <p
                              key={idx}
                              className="mb-4 text-base font-medium text-body-color"
                            >
                              {email}
                            </p>
                          ))
                        ) : (
                          <p className="mb-4 text-base font-medium text-body-color">
                            {detail.info}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <div className=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
                <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                  Send us a Message
                </h3>
                <form>
                  <InputField
                    label="Full Name"
                    name="fullName"
                    type="text"
                    placeholder="Adam Gelius"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="example@yourmail.com"
                  />
                  <InputField
                    label="Phone"
                    name="phone"
                    type="text"
                    placeholder="+885 1254 5211 552"
                  />
                  <TextAreaField
                    label="Message"
                    name="message"
                    placeholder="type your message here"
                  />
                  <div className="mb-0">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  );
}