// Next
import dynamic from "next/dynamic"
const Header = dynamic(() => import("./Header/Header"))
const Banner = dynamic(() => import("./Banner/Banner"))
const Partners = dynamic(() => import("./Partners/Partners"))
const PartnersSlider = dynamic(() => import("./Partners/PartnersSlider"))
const VisionStatement = dynamic(() => import("./VisionStatement/VisionStatement"))
const Brands = dynamic(() => import("./Brands/Brands"))
const TechTeams = dynamic(() => import("./TechTeams/TechTeams"))
const Contact = dynamic(() => import("./Contact/Contact"))
const Footer = dynamic(() => import("./Footer/Footer"))
const AutoScrollSlider = dynamic(() => import("./AutoScrollSlider"))


export {
    Header,
    Banner,
    Partners,
    PartnersSlider,
    AutoScrollSlider,
    VisionStatement,
    Brands,
    TechTeams,
    Contact,
    Footer
}