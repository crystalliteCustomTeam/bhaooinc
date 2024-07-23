import Image from 'next/image'
import React from 'react'
// icons 
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
// Images 
import logo from "media/logo.png"
import Link from 'next/link';
const Header = () => {
    return (
        <header className='py-8'>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="logo max-w-[50px]">
                        <Image src={logo} alt='Bhaoo Inc' width={83} height={83} />
                    </div>
                    <div className="flex items-center">
                        <p className='text-white text-[16px] font-[400] font-sans pr-6 md:block hidden'>Recuritment</p>
                        <div className="flex items-center justify-center gap-3 md:gap-5">
                            <div className="group">
                                <Link href="facebook.com" className='p-3 w-full block text-white bg-[#02010100] border border-white rounded-full group-hover:border group-hover:border-blue-600 duration-700 ease-in-out group-hover:duration-700'>
                                    <FaFacebookF className='text-[22px] font-bold group-hover:text-blue-600 group-hover:scale-[1.1] duration-700 ease-in-out group-hover:duration-700' />
                                </Link>
                            </div>
                            <div className="group">
                                <Link href="https://linkedin.com/" className='p-3 w-full block text-white bg-[#02010100] border border-white rounded-full group-hover:border group-hover:border-blue-600 duration-700 ease-in-out group-hover:duration-700'>
                                    <FaLinkedinIn className='text-[22px] font-bold group-hover:text-blue-600 group-hover:scale-[1.1] duration-700 ease-in-out group-hover:duration-700' />
                                </Link>
                            </div>
                            <div className="group">
                                <Link href="tel:3024020430" className='p-3 w-full block text-white bg-[#02010100] border border-white rounded-full group-hover:border group-hover:border-blue-600 duration-700 ease-in-out group-hover:duration-700'>
                                    <FaPhoneAlt className='text-[22px] font-bold group-hover:text-blue-600 group-hover:scale-[1.1] duration-700 ease-in-out group-hover:duration-700' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
