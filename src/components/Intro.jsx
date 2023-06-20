import React from 'react'
import Typewriter from 'typewriter-effect'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { BsMedium } from 'react-icons/bs'
import { SiHashnode } from 'react-icons/si'
import { SiUpwork } from 'react-icons/si'
import { SiFiverr } from 'react-icons/si'
import Image from 'next/image'
import hero from './../../public/profile/unnamed.jpg'
import Link from 'next/link'

const Intro = () => {
    return (
        <div className='w-[100%] h-auto mx-auto my-2 px-3
                        sm:w-11/12 sm:flex sm:justify-between sm:items-center sm:gap-10
        '>
            <div className='rounded-md px-4 py-3 h-auto transition-all origin-center delay-200 hover:scale-105
                        bg-gradient-to-tl from-white to-slate-200
                        sm:w-1/2
                        '>
                <h2 className='text-xl font-semibold my-2
                                
                '>
                    <Typewriter
                        options={{
                            strings: ['Hello,'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            devMode: true,
                            pauseFor: '60000ms'
                        }}
                    />
                </h2>
                <h2 className='text-3xl font-semibold my-2
                                
                '>
                    <Typewriter
                        options={{
                            strings: ['I am Shrish'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            pauseFor: '60000ms'
                        }}
                    />
                </h2>
                <h2 className='text-xl font-semibold my-2
                                
                '>
                    <Typewriter
                        options={{
                            strings: ['A Frontend Developer', 'A Freelancer'],
                            cursor: '_',
                            autoStart: true,
                            loop: true,
                            delay: 250,
                            pauseFor: '30000ms'
                        }}
                    />
                </h2>
                <div className='flex justify-start items-center my-4'>
                    <Link href='https://github.com' className='px-2'>
                        <AiFillGithub size={25} />
                    </Link>
                    <Link href='https://twitter.com' className='px-2'>
                        <AiOutlineTwitter size={25} />
                    </Link>
                    <Link href='https://google.com' className='px-2'>
                        <SiHashnode size={25} />
                    </Link>
                    <Link href='https://google.com' className='px-2'>
                        <BsMedium size={25} />
                    </Link>
                    <Link href='https://google.com' className='px-2'>
                        <SiFiverr size={30} />
                    </Link>
                    <Link href='https://google.com' className='px-2'>
                        <SiUpwork size={25} />
                    </Link>
                </div>
            </div>
            <div className='my-8 sm:w-1/2'>
                <Image src={hero} alt='img'
                    className='w-full rounded-md transition-all hover:scale-105
                            sm:w-full
                ' />
            </div>
        </div>
    )
}

export default Intro
