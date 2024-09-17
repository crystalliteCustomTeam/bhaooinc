import React from 'react'

const page = () => {
    return (
        <section className='h-screen flex items-center justify-center'>
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <h1 className='text-white text-[25px] md:text-[40px] font-sans font-[600]'>Privacy Policy</h1>
                </div>
                <div className="col-span-12 text-white text-left mt-5">
                    <h2 className="font-sans text-3xl mb-2 text-[#438EFF]">1. Introduction</h2>
                    <p className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">
                        Welcome to Bhaooinc ("we," "our," "us"). We are committed to protecting your privacy and ensuring your experience with us is safe and secure. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with us, including our digital services, mobile applications, and software solutions.
                    </p>
    
                    <h2 className="font-sans text-3xl mt-5 mb-2 text-[#438EFF]">2. Information We Collect</h2>
                    
                    <h3 className="font-sans text-xl mb-2">2.1. Personal Information</h3>
                    <p className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">
                        We may collect personal information that you provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc ml-5">
                        <li className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">Contact details (name, email address, phone number)</li>
                        <li className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">Company information (business name, job title, etc.)</li>
                        <li className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">Payment information (credit card details, billing address)</li>
                    </ul>
    
                    <h3 className="font-sans text-xl mt-5 mb-2">2.2. Non-Personal Information</h3>
                    <p className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">
                        We may also collect non-personal information automatically, including:
                    </p>
                    <ul className="list-disc ml-5">
                        <li className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">Device information (IP address, browser type, operating system)</li>
                        <li className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">Usage data (pages visited, time spent on our website, interaction with our services)</li>
                        <li className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">Cookies and similar technologies (for tracking user preferences and activities)</li>
                    </ul>
    
                    {/* Add more sections in a similar manner */}
                    
                    <h2 className="font-sans text-2xl mt-5 mb-2">Contact Us</h2>
                    <p className="font-sans text-[13px] xl:text-[14px] font-[400] text-[white] "    >
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:<br /><br />
                    </p>
                    <address className="not-italic font-sans text-[13px] xl:text-[14px] font-[400] text-[white] ">
                      
                        8 The Green, STE 300<br />
                        Dover, DE 19901<br />
                        <a href="mailto:info@bhaooinc.com" className="underline text-white">info@bhaooinc.com</a><br />
                        (302) 402 0430
                    </address>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default page
