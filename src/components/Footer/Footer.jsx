import React from 'react'
import Image from "next/image"
// Images
import logo from "media/logo.png"
import Link from 'next/link'
import { FaEnvelope, FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
const Footer = () => {
    return (
        <section>
            <div className="logo py-[40px] borderImage">
                <Link href="#">
                    <Image src={logo} alt='Bhaoo Inc' className='block mx-auto max-w-[60px]' />
                </Link>
            </div>
            <div className="location borderImageleft py-[30px]">
                <div className="container">
                    <ul className='lg:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0'>
                        <li>
                            <Link href="#" className='flex items-center gap-2 xl:gap-3 font-sans text-[13px] xl:text-[16px] font-[400] text-[white] text-center'>
                                <FaMapMarkerAlt className='lg:block hidden' />
                                Office: 8 The Green, STE 300, Dover, DE 19901
                            </Link>
                        </li>
                        <li className='flex items-center gap-5'>
                            <div className='group'>
                                <Link href="https://www.facebook.com/" className='bg-[#444444] border group-hover:border-blue-600 rounded-full text-white w-[50px] h-[50px] flex items-center justify-center p-2 duration-700 ease-in-out group-hover:duration-700'>
                                    <FaFacebook className='text-[23px] group-hover:text-blue-600 group-hover:scale-[1.1] duration-700 ease-in-out group-hover:duration-700' />
                                </Link>
                            </div>
                            <div className='group'>
                                <Link href="https://www.linkedin.com/" className='bg-[#444444] border group-hover:border-blue-600 rounded-full text-white w-[50px] h-[50px] flex items-center justify-center p-2 duration-700 ease-in-out group-hover:duration-700'>
                                    <FaLinkedin className='text-[23px] group-hover:text-blue-600 group-hover:scale-[1.1] duration-700 ease-in-out group-hover:duration-700' />
                                </Link>
                            </div>
                        </li>
                        <li className='flex items-center gap-5'>
                            <Link href="mailto:info@bhaooinc.com" className='text-white text-[13px] xl:text-[16px] font-sans flex items-center gap-3'>
                                <FaEnvelope className='lg:block hidden' />
                                info@bhaooinc.com
                            </Link>
                            <Link href="tel:3024020430" className='text-white text-[13px] xl:text-[16px] font-sans flex items-center gap-3'>
                                <FaPhoneAlt className='lg:block hidden' />
                                (302) 402 0430
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-8 lg:px-16 border-t-4 pt-[30px]">
                <ul className="flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-5 lg:gap-2 xl:gap-8">
                    <li>
                        <a href="tel:3028838877" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            book writing cube
                            <span className='block'>
                                (302) 883-8877
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:8335006007" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Bitswits
                            <span className='block'>
                                (833) 500-6007
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:8889008007" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Nftkreator
                            <span className='block'>
                                (888) 900-8007
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:8338000083" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Seo Results Pro
                            <span className='block'>
                                (833) 800-0083
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:3462992221" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Leadz Experts
                            <span className='block'>
                                (346) 299-2221
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:8007819093" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Best Selling Publisher
                            <span className='block'>
                                (800) 781-9093
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:8336666689" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Infinity Animations
                            <span className='block'>
                                (833) 666-6689
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:8336666684" className='text-[11px] xl:text-[13px] 2xl:text-[16px] font-sans text-white capitalize text-center flex flex-col items-center justify-center'>
                            Explainer Videos LLC
                            <span className='block'>
                                (833) 666 6684
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="copyright py-[20px]">
                <div className="text-center flex justify-evenly items-center ">
                    <p className='font-sans text-white text-[14px] md:text-[20px] '>2024 – Bhaooinc – All Rights Reserved</p>
                    <p><Link href="/privacy-policy" className="font-sans text-white text-[14px] md:text-[20px] ">Privacy Policy </Link></p>
                </div>
            </div>
        </section>
    )
}

export default Footer
