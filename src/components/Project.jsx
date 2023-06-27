import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import { data } from './../../data/data'

import project1 from './../../public/ecommerce/flip1.png'
import project2 from './../../public/ecommerce/flip2.png'

import pr1 from './../../public/projects/web1.png'
import pr2 from './../../public/projects/web2.png'
import pr3 from './../../public/projects/web3.png'
import pr4 from './../../public/projects/web4.png'

import 'swiper/css'


const ulstyle = {
    fontSize: '16px'
}

const Project = () => {
    return (
        <>
            <div className='text-white my-4 mx-auto w-11/12
            flex flex-col items-start flex-wrap gap-1
            sm:flex-row
             '>
                {
                    data.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, translateY: 50 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 2 }}
                            className='my-4 mx-auto px-3 py-2 w-11/12 h-auto sm:w-72 lg:w-80
                            shadow-md shadow-white rounded-md
                            '
                        >
                            <Swiper
                                effect='cube'
                                spaceBetween={10}
                                className='my-4'
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
                            <h2 className='my-2 text-xl text-zinc-200'>{item.name}</h2>
                            <p className='my-2 text-base text-neutral-300'>{item.desc}</p>
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}

export default Project
