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
                <div className="grid grid-cols-12 items-center my-14">
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandTwo} alt='Bhaoo Inc' className='w-9/12 md:block hidden animationUpDown' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>Bitswits:</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Unleash the Power of Custom Software Solutions</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>BitsWits.co</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>BitsWits, a trusted division of Bhaoo Inc, specializes in custom software development and IT consulting services. Our team of expert developers and consultants collaborates closely with clients to understand their unique business requirements and design bespoke software solutions. From web and mobile app development to cloud integration and automation, we empower businesses to leverage cutting-edge technology and enhance operational efficiency, productivity, and growth.</p>
                        <Link href="https://bitswits.co" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>NFT Kreator:</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Embrace the World of Digital Collectibles</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>NFTKreator.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>NFT Kreator, an innovative venture under the umbrella of Bhaoo Inc, enables artists, creators, and collectors to embrace the world of non-fungible tokens (NFTs). Our platform facilitates the creation, showcasing, and monetization of unique digital assets. With a secure blockchain foundation, intuitive user interface, and a thriving community, NFT Kreator empowers individuals and businesses to explore new revenue streams and participate in the growing digital economy.</p>
                        <Link href="https://nftkreator.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandThree} alt='Bhaoo Inc' className='w-9/12 mx-auto md:block hidden animation' />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center my-14">
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandFour} alt='Bhaoo Inc' className='w-9/12 md:block hidden animationUpDown' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>SEO Results Pro:</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Propel Your Online Presence to New Heights</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>SEOResultsPro.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>SEO Results Pro, a prominent offering by Bhaoo Inc, is a results-driven digital marketing agency. Our specialized search engine optimization (SEO) services boost your online presence, drive organic traffic, and generate valuable leads. With a team of experienced professionals and advanced strategies, we optimize your website’s visibility, improve search engine rankings, and help you stand out in the highly competitive digital landscape.</p>
                        <Link href="https://seoresultspro.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>Leadz Experts:</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Accelerate Your Business Growth with Strategic Marketing</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>LeadzExperts.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>Leadz Experts, a strategic partner of Bhaoo Inc, is a results-oriented digital marketing agency. Our comprehensive marketing solutions drive lead generation, customer engagement, and business growth. From strategic planning and implementation to marketing automation and analytics, we help businesses maximize their marketing ROI and achieve sustainable success in the ever-evolving digital landscape.</p>
                        <Link href="https://leadexperts.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandFive} alt='Bhaoo Inc' className='w-9/12 mx-auto md:block hidden animation' />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center my-14">
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandSix} alt='Bhaoo Inc' className='w-9/12 md:block hidden animationUpDown' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>Best Selling Publisher</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Unleashing Imagination, Inspiring Generations</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>bestsellingpublisher.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>As the premier destination for best-selling literature, we’re more than just a book writing, editing, and publishing powerhouse. We’re a dynamic fusion of creativity and innovation, brought to life by a dedicated team of writers, editors, publishers, developers, and designers. Together, we don’t just produce books; we craft unforgettable journeys, market masterpieces, and ignite imaginations worldwide. Welcome to where stories transcend pages, shaping the future of literature.</p>
                        <Link href="https://bestsellingpublisher.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>Infinity Animations</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>Let Our Animations Tell Your Story</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>infinityanimations.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>Transforming Visions into Vivid Realities: Elevate Your Storytelling with Our Animation Magic. Whether you’re a brand looking to mesmerize audiences, an educator aiming to demystify complexities, or a content creator chasing visual perfection, our animation services are your canvas. We merge technical mastery with artistic genius, infusing life into every frame and creating animations that defy expectations. Let us turn your ideas into animated masterpieces that captivate, educate, and inspire.</p>
                        <Link href="https://infinityanimations.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandSeven} alt='Bhaoo Inc' className='w-9/12 mx-auto md:block hidden animation' />
                    </div>
                </div>
                <div className="grid grid-cols-12 items-center mt-14 lg:mb-14">
                    <div className="col-span-12 md:col-span-6">
                        <Image src={BrandEight} alt='Bhaoo Inc' className='w-9/12 md:block hidden animationUpDown' />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <h3 className='text-[#fff] text-[25px] md:text-[30px] lg:text-[40px] font-sans font-[600]'>Explainer Video LLC</h3>
                        <p className='text-white text-[17px] lg:text-[20px] font-sans font-[500] my-2'>A Platform Serving Vivid Creatives To Businesses And Marketers</p>
                        <h5 className='text-[#438EFF] font-sans text-[20px] lg:text-[23px] font-[500] '>explainervideosllc.com</h5>
                        <p className='font-sans text-white text-[14px] lg:text-[16px] mt-3 mb-8 lg:pr-5 h-[100px] overflow-y-scroll lg:overflow-y-hidden lg:h-full'>As a prominent 2D Animation Company based in the United States, we recognize that achieving a level of proficiency is insufficient in the current fiercely competitive market landscape. In an era where customers are no longer content with mundane transactions, they yearn for a level of engagement that transcends the ordinary; they seek unparalleled experiences from the brands they interact with.</p>
                        <Link href="https://explainervideosllc.com" target="_blank" className='border-white border-2 text-white font-sans text-[16px] rounded-[12px] px-[30px] py-[8px] flex items-center w-fit gap-x-3 group'>
                            Learn More
                             <FaArrowRight className='group-hover:ml-[20px] duration-700 group-hover:duration-700 ease-in-out' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands
