import Image from 'next/image'
import React from 'react'
// Images
import TechOne from "media/images/tech-1.png"
import TechTwo from "media/images/tech-2.png"
import TechThree from "media/images/tech-3.png"
import TechFour from "media/images/tech-4.png"
import TechFive from "media/images/tech-5.png"
import TechSix from "media/images/tech-6.png"
import TechSeven from "media/images/tech-7.png"
import TechEight from "media/images/tech-8.png"
import TechNine from "media/images/tech-9.png"

const TechTeams = () => {
    return (
        <section className='py-[50px] lg:py-[80px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <p className='font-sans text-white text-[14px] md:text-[20px] mt-3'>Teams we’ve built for our startups & projects</p>
                            <h2 className='text-[35px] md:text-[50px] lg:text-[60px] font-[600] text-white font-sans text-center mb-[20px] md:mb-[50px]'>Tech Teams</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-center gap-5">
                        <div className="w-full md:w-[48%] lg:w-[200px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col items-center lg:justify-around min-h-[175px] lg:min-h-full justify-center gap-3 ">
                                <Image src={TechOne} alt='Bhaoo Inc' className='w-[50px] xl:w-[47px] block md:mx-auto' />
                                <p className='text-[16px] md:text-[12px] xl:text-[16px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    Google Services
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[320px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col lg:flex-row items-center lg:px-3 gap-x-6 justify-center lg:justify-start min-h-[175px] lg:min-h-full">
                                <Image src={TechTwo} alt='Bhaoo Inc' className='w-[18%] lg:w-[30%] mx-auto' />
                                <p className='text-[12px] lg:text-[15px] xl:text-[20px] font-[600] font-sans text-white lg:mb-[12px] mt-[12px] text-center'>App Design & <br /> Development</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[190px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start px-3 gap-x-6 min-h-[175px] lg:min-h-full">
                                <Image src={TechThree} alt='Bhaoo Inc' className='w-[18%] md:w-[16%] lg:w-[50%] block mx-auto mb-2 lg:mb-0' />
                                <p className='text-[22px] xl:text-[28px] font-[600] font-sans text-white text-center'>
                                    <span className="lg:block leading-[25px]">S</span>
                                    <span className="lg:block leading-[25px]">M</span>
                                    <span className="lg:block leading-[25px]">M</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[130px]">
                            <div className="bg-[#262626] py-[15px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col items-center justify-center lg:justify-start min-h-[175px] lg:min-h-full">
                                <Image src={TechFour} alt='Bhaoo Inc' className='w-[17%] md:w-[20%] xl:w-[47px] block md:mx-auto' />
                                <p className='text-[16px] md:text-[12px] xl:text-[16px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    Article <br className='lg:block hidden' /> Writing
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-[230px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col items-center justify-center lg:justify-start min-h-[175px] lg:min-h-full">
                                <Image src={TechFive} alt='Bhaoo Inc' className='w-[18%] md:w-[50px] lg:w-[47px] block md:mx-auto' />
                                <p className='text-[16px] md:text-[14px] xl:text-[16px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    software <br className='md:hidden block' /> development
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 flex flex-wrap lg:flex-nowrap items-center justify-between lg:justify-center gap-5 lg:pt-4">
                        <div className="w-full md:w-[48%] lg:w-[340px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col lg:flex-row items-center justify-around md:justify-start px-5 gap-x-6 lg:gap-x-10 min-h-[175px] lg:min-h-full">
                                <Image src={TechSix} alt='Bhaoo Inc' className='w-[20%] lg:w-[28%]' />
                                <p className='text-[15px] xl:text-[20px] font-[600] font-sans text-white my-[12px] text-center'>Amazon Book  <br /> Publishing</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[205px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col items-center justify-center lg:justify-start min-h-[175px] lg:min-h-full">
                                <Image src={TechSeven} alt='Bhaoo Inc' className='w-[18%] md:w-[45px] xl:w-[47px] block md:mx-auto' />
                                <p className='text-[13px] lg:text-[8px] xl:text-[13px] font-[600] font-sans text-white mt-[12px] text-center'>
                                    Web Design & <br /> Development
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[340px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex flex-col lg:flex-row items-center justify-around md:justify-start px-6 gap-x-6 lg:gap-x-10 min-h-[175px] lg:min-h-full">
                                <Image src={TechEight} alt='Bhaoo Inc' className='w-[20%] lg:w-[32%] mb-[10px] lg:mb-0' />
                                <p className='text-[15px] xl:text-[20px] font-[600] font-sans text-white my-[12px] text-center'>
                                    <span className='text-[25px] xl:text-[45px] leading-[20px] xl:leading-[40px]'>Book</span> <br /> Publishing</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[48%] lg:w-[205px]">
                            <div className="bg-[#262626] py-[15px] xl:py-[20px] border-2 border-[#707070] rounded-[20px] h-full flex items-center flex-col lg:flex-row justify-around md:justify-start px-6 gap-x-6 min-h-[175px] lg:min-h-full">
                                <Image src={TechNine} alt='Bhaoo Inc' className='w-[20%] md:w-[25%] lg:w-[60%] block md:mx-auto mb-[20px] lg:mb-0' />
                                <p className='text-[22px] xl:text-[28px] font-[600] font-sans text-white text-center'>
                                    <span className="lg:block leading-[25px] xl:leading-[31px]">S</span>
                                    <span className="lg:block leading-[25px] xl:leading-[31px]">E</span>
                                    <span className="lg:block leading-[25px] xl:leading-[31px]">O</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechTeams
