import React from 'react'
import Typewriter from 'typewriter-effect'
import Image from 'next/image'
import hero from './../../public/profile/unnamed.jpg'

const Intro = () => {
    return (
        <div className='w-[100%] h-auto mx-auto my-2 px-3'>
            <div className='rounded-md px-4 py-3 h-auto
                        bg-gradient-to-tl from-white to-slate-200'>
                <h2 className='text-xl font-semibold my-2'>
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
                <h2 className='text-3xl font-semibold my-2'>
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
                <h2 className='text-xl font-semibold my-2'>
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
            </div>
            <div className='my-8'>
                <Image src={hero} alt='img' className='w-full rounded-md' />
            </div>
        </div>
    )
}

export default Intro
