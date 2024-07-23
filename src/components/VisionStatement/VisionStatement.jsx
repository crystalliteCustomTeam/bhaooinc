import Image from 'next/image'
import React from 'react'
// Images 
import StateMentBg from "media/images/mission-bg.png"
import BottomImage from "media/images/mission-bg-2.png"
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const VisionStatement = () => {
    return (
        <section className='py-[50px] md:py-[80px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <h2 className='text-[#438EFF] text-[30px] md:text-[50px] font-sans font-[600]'>Vision Statement:</h2>
                            <p className='font-sans text-white text-[14px] md:text-[16px] mt-3'>To be the Catalyst of Technological Transformation: Empowering Businesses and Enriching Lives</p>
                        </div>

                        <div className="relative mt-10 py-4 2xl:px-[20px] xl:py-12">
                            <div className='absolute left-0 right-0 top-0 lg:block hidden'>
                                <Image src={StateMentBg} alt='Bhaoo Inc' className='mx-auto block' />
                            </div>
                            <div className="txt text-center">
                                <h3 className='text-[#438EFF] text-[25px] md:text-[40px] font-sans font-[600]'>Mission Statement:</h3>
                                <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 xl:w-10/12 lg:px-10 mx-auto'>“At Bhaoo Inc, our mission is to drive technological transformation by providing innovative solutions and services that empower businesses to thrive in the digital age. We are committed to delivering exceptional value to our clients through cutting-edge technologies, strategic partnerships, and a customer-centric approach. Focusing on excellence, integrity, and continuous innovation, we strive to exceed expectations, inspire growth, and positively impact the lives of individuals and communities worldwide. Let’s shape a future where technology creates limitless possibilities and propels global advancement.”</p>
                            </div>
                            <div className='absolute bottom-[-58px] 2xl:bottom-[-95px] right-[65px] 2xl:right-[170px] w-[6%] lg:block hidden'>
                                <Image src={BottomImage} alt='Bhaoo Inc' className='w-full' />
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-[20px] md:mt-[50px]'>
                            <Link href="#" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center gap-x-3 group'>
                                Learn More
                                <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionStatement
