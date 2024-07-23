"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Axios from "axios";
// Images
import ParticleOne from "media/images/particle-1.png"
import ParticleTwo from "media/images/particle-2.png"
import { usePathname } from 'next/navigation'

const Contact = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
        pageURL: usePathname()
    });
    const [formStatus, setFormStatus] = useState("Submit Form");
    const [errors, setErrors] = useState({});
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = 'Name is required';
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = 'Valid email is required';
        }
        // subject validation
        if (!data.subject.trim()) {
            errors.subject = 'Subject is required';
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = 'Valid phone is required';
        }
        return errors;
    };
    const handleDataChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    } 
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = { ...data };
            let reqOptions = {
                url: "/api/email",
                method: "POST",
                headers: headersList,
                data: JSON.stringify(bodyContent),
            }
            await Axios.request(reqOptions);
            setFormStatus("Submit Form");
            window.location.href = "/thank-you";
        } else {
            setFormStatus("Failed...");
        }
    }
    return (
        <section className='py-[50px] xl:py-[80px]'>
            <div className="container relative">
                <div className="particleOne absolute right-0 top-0 lg:top-[-130px] lg:opacity-[1] opacity-[0.7] z-[-1] md:block hidden">
                    <Image src={ParticleOne} alt='Bhaoo Inc' className='w-8/12' />
                </div>
                <div className="ParticleTwo absolute left-0 bottom-0 lg:opacity-[1] opacity-[0.7] z-[-1] md:block hidden">
                    <Image src={ParticleTwo} alt='Bhaoo Inc' className='w-8/12' />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="text-center">
                            <p className='font-sans text-white text-[14px] md:text-[20px] mt-3'>A journey of a thousand miles begins with a single step</p>
                            <h2 className='text-[35px] md:text-[50px] lg:text-[60px] font-[600] text-white font-sans text-center mb-[20px] xl:mb-[50px]'>GET IN TOUCH</h2>
                        </div>
                    </div>
                </div>
                <form action="#" className='lg:w-8/12 mx-auto'>
                    <div className="grid grid-cols-12 items-center gap-y-4 gap-x-5">
                        <div className="col-span-12 md:col-span-6">
                            <div className="name">
                                <input type="text" placeholder='Name' name='name' className='bg-[#262626] rounded-[12px] font-sans text-[15px] font-[400] text-[#8F8F8F] px-4 w-full h-[50px] border border-[#666] placeholder:text-[#8f8f8f] focus:outline-0 focus:border-0' onChange={handleDataChange} />
                                {
                                    errors.name && <span className="text-[12px] block p-2 font-medium text-red-600">
                                        {errors.name}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="email">
                                <input type="email" placeholder='Email' name='email' className='bg-[#262626] rounded-[12px] font-sans text-[15px] font-[400] text-[#8F8F8F] px-4 w-full h-[50px] border border-[#666] placeholder:text-[#8f8f8f] focus:outline-0 focus:border-0' onChange={handleDataChange} />
                                {
                                    errors.email && <span className="text-[12px] block p-2 font-medium text-red-600">
                                        {errors.email}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="number">
                                <input type="tel" placeholder='Telephone Number' name='phone' className='bg-[#262626] rounded-[12px] font-sans text-[15px] font-[400] text-[#8F8F8F] px-4 w-full h-[50px] border border-[#666] placeholder:text-[#8f8f8f] focus:outline-0 focus:border-0' onChange={handleDataChange} />
                                {
                                    errors.phone && <span className="text-[12px] block p-2 font-medium text-red-600">
                                        {errors.phone}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <div className="subject">
                                <input type="text" placeholder='Subject' name='subject' className='bg-[#262626] rounded-[12px] font-sans text-[15px] font-[400] text-[#8F8F8F] px-4 w-full h-[50px] border border-[#666] placeholder:text-[#8f8f8f] focus:outline-0 focus:border-0' onChange={handleDataChange} />
                                {
                                    errors.subject && <span className="text-[12px] block p-2 font-medium text-red-600">
                                        {errors.subject}
                                    </span>
                                }
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="message">
                                <textarea placeholder='Message' name='message' className='bg-[#262626] rounded-[12px] font-sans text-[15px] font-[400] text-[#8F8F8F] px-4 pt-2 w-full border border-[#666] placeholder:text-[#8f8f8f] focus:outline-0 focus:border-0 resize-none' rows="8" onChange={handleDataChange}></textarea>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <button className='w-full h-[40px] bg-[#438EFF] text-white text-center font-sans text-[15px] font-[500] rounded-[12px]' onClick={handleFormSubmit}>{formStatus}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
