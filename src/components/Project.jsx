import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import pr1 from './../../public/projects/web1.png'
import pr2 from './../../public/projects/web2.png'
import pr3 from './../../public/projects/web3.png'
import pr4 from './../../public/projects/web4.png'

import 'swiper/css'


const Project = () => {
    return (
        <>
            <div className='text-white my-4'>
                <motion.div
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 2 }}
                >
                    <Swiper
                        effect='cube'
                        spaceBetween={10}
                    >
                        <SwiperSlide>
                            <Image src={pr1} alt='logo' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={pr2} alt='logo' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={pr3} alt='logo' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={pr4} alt='logo' />
                        </SwiperSlide>
                    </Swiper>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia, eos, fugiat aspernatur debitis</p>
                </motion.div>
            </div>
        </>
    )
}

export default Project
