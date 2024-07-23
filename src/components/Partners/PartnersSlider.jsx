"use client"

import React from 'react'
import Image from 'next/image'
// components
import { AutoScrollSlider } from "@/components"
// Images 
import Partners1 from "media/images/partner-1.webp"
import Partners2 from "media/images/partner-2.webp"
import Partners3 from "media/images/partner-3.webp"
import Partners4 from "media/images/partner-4.webp"
import Partners5 from "media/images/partner-5.webp"
import Partners6 from "media/images/partner-6.webp"
import Partners7 from "media/images/partner-7.webp"
import Partners8 from "media/images/partner-8.webp"

const PartnersSlider = () => {
    return (
        <>
            <AutoScrollSlider wrapperClass="mt-[80px]">
                {
                    [Partners1, Partners2, Partners2, Partners3, Partners4, Partners5, Partners6, Partners7, , Partners8].map((e, i) => (
                        <div key={i} className='basis-3/5 md:basis-2/5 lg:basis-1/5 min-w-0 px-10 shrink-0 border-r border-[#6e6c6c] border-dashed mb-5'>
                            <div>
                                <Image tabIndex={0} key={i} src={e} alt='Bhaoo Inc' className='w-[300px] mx-auto' />
                            </div>
                        </div>
                    ))
                }
            </AutoScrollSlider>
            <AutoScrollSlider direction="backward">
                {
                    [Partners1, Partners2, Partners2, Partners3, Partners4, Partners5, Partners6, Partners7, , Partners8].map((e, i) => (
                        <div key={i} className='basis-3/5 md:basis-2/5 lg:basis-1/5 min-w-0 px-10 shrink-0 border-r border-[#6e6c6c] border-dashed'>
                            <div>
                                <Image tabIndex={0} key={i} src={e} alt='Bhaoo Inc' className='w-[300px] mx-auto' />
                            </div>
                        </div>
                    ))
                }
            </AutoScrollSlider>
        </>
    )
}

export default PartnersSlider
