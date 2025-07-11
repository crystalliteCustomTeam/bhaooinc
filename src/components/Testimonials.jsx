"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"
// Media
import one from "media/reviews/1.png"
import two from "media/reviews/2.png"
import three from "media/reviews/3.png"
import four from "media/reviews/4.png"
import five from "media/reviews/5.png"
import Image from "next/image"

const reviews = [
    {
        img: one,
        name: "Jeff Williams",
        jd: "HOD",
        review: "By partnering with Infiniti Media INC, we gained clarity on opportunities emerging technology presented. Their consultative approach helped align our roadmap with strategic goals, better positioning us for sustainable growth."
    },
    {
        img: two,
        name: "Maria Fernandez",
        jd: "CEO",
        review: "When navigating a major digital overhaul, Infiniti Media INC expertise provided confidence at every step. They understood our unique complexities and delivered customized solutions driving new efficiencies across operations. I would highly recommend their services."
    },
    {
        img: three,
        name: "Sarah Johnson",
        jd: "Manager",
        review: "As a healthcare provider, data security is paramount. Infiniti Media INC not only met but exceeded our expectations in ensuring the confidentiality and integrity of our sensitive information during our digital transformation. Their commitment to compliance and robust security measures gave us peace of mind throughout the process."
    },
    {
        img: four,
        name: "Michael Chen",
        jd: "Manager",
        review: "Infiniti Media INC holistic approach to digital transformation went beyond just technology implementation. They took the time to understand our organizational culture and change management needs, fostering buy-in and adoption among our teams. The seamless integration of new systems has resulted in improved collaboration and productivity company-wide."
    },
    {
        img: five,
        name: "Emily Thompson",
        jd: "Manager",
        review: "Our partnership with Infiniti Media INC was instrumental in modernizing our IT infrastructure. Their strategic guidance helped us future-proof our technology stack while staying within budget and timeline constraints. Their dedication to client success is evident in the measurable improvements we've seen across our IT environment."
    }
]

export default function Testimonials() {
    const plugins = [
        Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: "center", loop: true }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section>
            <div className="relative z-10 bg-[#131313] py-[40px] text-white">
                <div className="container">
                    <h2 className="lg:text-[42px] md:text-[32px] text-[25px]  leading-tight font-bold mb-3 text-[#dee56f] text-center">
                        OUR CLIENTS
                    </h2>
                    <p className="text-sm leading-normal font-normal text-center mb-10">We've helped many thrive through tailored technological transformation.</p>
                    <div>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex [margin-left:calc(1rem_*_-1)] items-center">
                                {
                                    reviews.map(({ img, name, jd, review }, i) => (
                                        <div key={i} className="basis-full md:basis-1/2 xl:basis-1/3 shrink-0 grow-0 pl-4">
                                            <div className="border-2 transition-all duration-200 ease-in-out group hover:border-[#484848] border-[#dee56f] md:rounded-[0_20px_0_20px] rounded-[20px] p-[10px_20px]">
                                                <Image src={img} alt="avatar" />
                                                <h2 className="text-xl font-bold leading-snug mt-4 mb-1">{name}</h2>
                                                <h3 className="text-md font-light leading-snug mb-3">{jd}</h3>
                                                <p className="text-sm leading-relaxed font-normal">{review}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* <div>
                            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}