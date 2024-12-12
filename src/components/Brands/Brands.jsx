import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
// Images
import BrandOne from "media/images/brnad-1.png"
import BrandTwo from "media/images/brnad-2.png"
import BrandThree from "media/images/brnad-3.png"
import BrandFour from "media/images/brnad-4.png"
import BrandFive from "media/images/brnad-5.png"
import BrandSix from "media/images/brnad-6.png"
import BrandSeven from "media/images/brnad-7.png"
import BrandEight from "media/images/brnad-8.png"

const Brands = () => {
    return (
        <section className='py-[50px] lg:py-[80px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] md:text-[50px] font-[600] text-white font-sans text-center mb-[20px] md:mb-[50px]'>
                            Our Brands
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>BookWritingCube:</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Elevate Your Written Works to New Heights</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>BookWritingCube.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>BookWritingCube, a flagship service of Bhaoo Inc, brings your creative ideas to life through professional writing services. Whether you are an aspiring author, academic researcher, or business professional, our talented team of writers and editors are dedicated to delivering exceptional written content that captivates and engages your audience. From book ghostwriting to editing and proofreading, we ensure your written works are polished, impactful, and ready to make a lasting impression.</p>
                        <Link href="https://bookwritingcube.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                            <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandOne} alt='Bhaoo Inc' className='w-9/12 mx-auto md:block hidden animation' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
