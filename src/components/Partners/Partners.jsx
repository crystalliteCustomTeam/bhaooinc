// "use client"

import React from 'react' 
import { PartnersSlider } from '..'

const Partners = () => {
    return (
        <section className='py-[40px]'>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <PartnersSlider />
                </div>
            </div>
        </section>
    )
}

export default Partners
