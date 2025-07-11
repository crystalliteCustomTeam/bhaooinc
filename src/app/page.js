import { Video, CounterAnimation, Contact, Card } from "../components/index";
import Image from "next/image";
import Icon1 from "media/serviceIcon/1.png";
import Icon2 from "media/serviceIcon/2.png";
import Icon3 from "media/serviceIcon/3.png";
import Icon4 from "media/serviceIcon/4.png";
import Icon5 from "media/serviceIcon/5.png";
import Icon6 from "media/serviceIcon/5.png";
import Banner from "media/bannerBg.png";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <>
      <section>
        <div className="relative">
          <Video />
        </div>
      </section>
      <section id="services">
        <div className="relative xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px] bg-[#131313]">
          <div className="container">
            <div className="sm:text-center text-justify text-white xl:w-[80%] mx-auto">
              <h1 className="lg:text-[42px] md:text-[32px] text-[25px] leading-tight font-bold mb-3">
                <span className="text-[#dee56f]">On-Demand Services</span> For Small And Medium
                Businesses Across The United States
              </h1>
              <p className="text-sm leading-normal font-normal">
                At Infiniti Media INC, we’re pioneers in democratizing access to technological
                advancement. Our mission? To ignite the digital age for businesses, offering
                innovative solutions and services that spark growth and prosperity. With a laser
                focus on customer empowerment and strategic alliances, we’re not just redefining
                investment; we’re revolutionizing it. Our commitment to excellence, integrity, and
                relentless innovation ensures that we don’t just meet expectations; we exceed them,
                propelling global progress forward. Join us on the journey where Infiniti Media INC
                open doors to boundless opportunities for individuals and communities worldwide.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-7 mt-10 max-w-[1100px] mx-auto">
              {[
                [
                  Icon1,
                  "E-Commerce",
                  "We build and optimize e-commerce platforms using secure, scalable architectures that drive conversions and seamless user experiences.",
                ],
                // [Icon2,
                //   "Performance / Digital Marketing",
                //   "Data-driven campaigns focused on measurable ROI—leveraging paid channels, conversion tracking, and dynamic content delivery"],
                // [Icon3,
                //   "Organic Search Optimization",
                //   "Boost your visibility with white-hat search strategies, keyword architecture, and content optimization for long-term search dominance."],
                [
                  Icon4,
                  "Mobile App Development",
                  "Custom iOS and Android apps built with cross-platform frameworks and native performance for exceptional mobile engagement.",
                ],
                [
                  Icon5,
                  "Website (MRO)",
                  "Maintain, repair, and overhaul your website—enhancing speed, UX/UI, security, and technical audit for peak performance.",
                ],
                [
                  Icon6,
                  "Cloud Computing",
                  "Empower your operations with scalable, secure cloud infrastructures—migration, deployment, and management done right.",
                ],
                [
                  Icon6,
                  "AI Chatbots",
                  "Deliver personalized and responsive customer experiences with our AI-powered chatbots that automate routine tasks, provide instant support, and drive engagement across digital channels.",
                ],
                [
                  Icon6,
                  "Business Plans",
                  "Ready business plans with financial modeling, market research, and brand positioning tailored for funding success.",
                ],
                [
                  Icon6,
                  "Cybersecurity Solutions",
                  "Protect your valuable digital assets and safeguard your business from evolving cyber threats with our comprehensive cybersecurity solutions.",
                ],
              ].map(([img, title, desc], i) => (
                <div
                  key={i}
                  className="border-2 transition-all duration-200 ease-in-out group hover:border-[#484848] border-[#dee56f] md:rounded-[0_20px_0_20px] rounded-[20px] p-[50px_20px] text-center text-white lg:last:col-start-2"
                >
                  {/* <div className="border border-[#dee56f w-max mx-auto p-5 rounded-full">
                      <Image src={img} alt="icons" width={40} height={40} className="block mx-auto brightness-0 invert group-hover:invert-[.2] group-hover:brightness-[.1]" draggable={false} />
                    </div> */}
                  <h3 className="text-[20px] leading-tight font-bold my-3">{title}</h3>
                  <p className="text-[13px] leading-normal font-normal">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="relative z-10 bg-[#131313] xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px]">
          <div className="container">
            <div className="grid grid-cols-1 items-center max-w-[900px] mx-auto">
              <div className="text-white text-center">
                <h2 className="lg:text-[42px] md:text-[32px] text-[25px]  leading-tight font-bold mb-3 text-[#dee56f]">
                  WE HAVE IT ALL!
                </h2>
                <div className="relative flex justify-center items-center gap-x-16 md:my-10 my-5">
                  <div className="text-center">
                    <CounterAnimation start={0} end={10} duration={3000} />
                    <span className="block lg:text-[20px] md:text-base text-sm font-light">
                      Years
                    </span>
                  </div>
                  <div className="text-center">
                    <CounterAnimation start={0} end={2000} duration={3000} prefix="+" />
                    <span className="block lg:text-[20px] md:text-base text-sm font-light">
                      Clients
                    </span>
                  </div>
                  <div className="text-center">
                    <CounterAnimation start={0} end={600} duration={3000} prefix="+" />
                    <span className="block lg:text-[20px] md:text-base text-sm font-light">
                      Reviews
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-normal font-normal">
                  We are a technology-focused investment company that drives innovation and
                  transformation across various digital services. With a passion for excellence and
                  a deep understanding of the evolving technological landscape, we invest in
                  cutting-edge solutions to help businesses thrive in the digital age. Discover how
                  our expertise in digital marketing, mobile app development, software solutions,
                  and content services can unlock new opportunities and accelerate your growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <section>
        <div className="relative bg-[#231F20] text-black lg:pt-[80px] md:pt-[60px] pt-[40px]">
          {/* <div className="container">
            <div className="bg-[#dee56f] grid grid-cols-12 md:gap-0 gap-5 items-center rounded-3xl md:px-10 px-5 md:py-10 py-8">
              <div className="xl:col-span-9 md:col-span-8 col-span-12">
                <span className="block text-base font-normal mb-3">Do you have any project?</span>
                <h3 className="lg:text-[40px] md:text-[25px] text-[20px] leading-tight font-semibold">Let’s Talk About Business <br className="md:block hidden" /> Solutions With Us</h3>
              </div>
              <div className="xl:col-span-3 md:col-span-4 col-span-12">
                <a href="#" className="block text-center border-2 px-14 py-2 transition-all duration-300 ease-in-out __animatedPing border-black lg:text-[25px] md:text-xl text-base leading-tight hover:bg-white hover:border-white">Join Us</a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <section id="contact">
        <div className="relative z-10 xl:py-[100px] lg:py-[80px] md:py-[60px] py-[40px] bg-[#231F20]">
          <Image
            src={Banner}
            alt="banner"
            className="absolute bg-[#231F20] top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-center"
            priority={true}
          />
          <div className="container">
            <div className="text-center text-white">
              <span className="block md:text-[20px] text-lg leading-tight font-medium">
                A journey of a thousand miles begins with a single step
              </span>
              <h2 className="text-[#dee56f] xl:text-[45px] lg:text-[40px] md:text-[30px] text-[25px] font-bold mb-5">
                GET IN TOUCH
              </h2>
            </div>
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
