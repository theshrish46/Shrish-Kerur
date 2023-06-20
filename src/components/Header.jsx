import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import logo from './../../public/profile/unnamed.jpg'
import { BsFillMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'

const Header = () => {
    const handleTheme = useCallback((active) => {
        active ? setActive(false) : setActive(true)
    }, [])

    const [active, setActive] = useState(false);
    return (
        <div className='w-full px-3 sm:w-5/6 mx-auto'>
            <nav className='flex justify-between items-center'>
                <div>
                    <Image src={logo} alt='logo' className='w-8 h-8 rounded-full' />
                </div>
                <div>
                    <button className='w-8 h-8 mx-2' onClick={() => handleTheme(active)}>
                        {
                            active ? <BsFillSunFill className='shadow-md rounded-full w-5 h-5' /> : <BsFillMoonFill className='h-5 w-5 shadow-md rounded-full' />
                        }
                    </button>
                    <button className='font-semibold px-2 py-1 self-start rounded-md bg-cyan-200'>Resume</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
