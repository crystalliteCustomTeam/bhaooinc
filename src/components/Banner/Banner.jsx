import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// icons
import { FaAngleRight } from "react-icons/fa";
// Images 
import Lines from "media/images/lines.png"

const Banner = ({
    src = "https://player.vimeo.com/progressive_redirect/playback/987411419/rendition/1080p/file.mp4?loc=external&log_user=0&signature=3f271b808dd8e60b03380169f7fca6c71e46192a72f329a2d27120a13e430783"
}) => {
    return (
        <>
            <section className='py-[50px] xl:py-[80px] relative h-[380px] md:h-[600px] -z-10 lg:max-h-[600px] overflow-hidden'>
                <div className="video absolute top-0 left-0 w-full z-[-1]">
                    <video tabIndex={0} loop autoPlay muted playsInline aria-label="Video Player" className="max-w-full w-full h-full object-cover object-center">
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#000000] opacity-80"></div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="text-center">
                                <h1 className='text-[27px] md:text-[40px] xl:text-[61px] leading-[37px] md:leading-[80px] text-white font-sans font-[500] mb-5'>
                                    <b className='bg-[#438EFF]'>Empowering</b> Your Digital <br className='d-lg-block d-none' /> Transformation <b className='bg-[#438EFF]'>Journey</b>
                                </h1>
                                <p className='font-sans text-white text-[14px] md:text-[15px] lg:w-9/12 md:px-4 xl:px-10 mx-auto'>We are a technology-focused investment company that drives innovation and transformation across various digital services. With a passion for excellence and a deep understanding of the evolving technological landscape, we invest in cutting-edge solutions to help businesses thrive in the digital age. Discover how our expertise in digital marketing, mobile app development, software solutions, and content services can unlock new opportunities and accelerate your growth.</p>
                            </div>
                            <div className="mt-[110px] 2xl:mt-[135px] md:block hidden">
                                <Link href="#" className="bg-[#438eff] rounded-full text-[50px] font-[500] h-[75px] w-[75px] mx-auto flex items-center justify-center hover:duration-700 hover:scale-[1.1] scale-[1] duration-700 ease-in-out">
                                    <FaAngleRight className='pl-1 text-white' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lines absolute bottom-[80px] left-0 right-0 mx-auto z-[-1] md:block hidden">
                    <Image src={Lines} alt='Bhaoo Inc' className='w-full' />
                </div>
            </section>
        </>

    )
}

export default Banner
