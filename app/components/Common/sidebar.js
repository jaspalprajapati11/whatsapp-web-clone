"use client"
import React from 'react'
import { BsChatRightTextFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { GrHistory } from "react-icons/gr";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCircleDashed } from "react-icons/lu";
import { usePathname } from 'next/navigation'


import Link from 'next/link';


const Sidebar = () => {
    const pathname = usePathname()
    console.log(pathname.includes('communities'))
    return (
        <>
            <div className="flex flex-col items-center justify-between border basis-16 bg-slate-100 p-1">
                <div>
                    <Link href='/'>
                        <div className={`mt-6 ml-1.5 flex items-center justify-center h-10 w-10 ${pathname === '/' ? 'bg-gray-300 border-none border-2 rounded-full' : null}`}>
                            <div className="relative flex items-center borderrounded-md shadow-sm">
                                <div className="border rounded-full h-5 w-5 bg-green-400 pointer-events-none absolute inset-y-0 left-3 -top-6 flex items-center justify-center">
                                    <p className="text-xs text-white">5</p>
                                </div>
                            </div>
                            <BsChatRightTextFill className="cursor-pointer" color='#54656f' size={20} />
                        </div>
                    </Link>
                    <Link href='/communities'>
                        <div className={`mt-6 ml-1.5 flex items-center justify-center h-10 w-10 ${pathname === '/communities' ? 'bg-gray-300 border-none border-2 rounded-full' : null}`}>
                            <MdPeople className="cursor-pointer" color='#54656f' size={24} />
                        </div>
                    </Link>
                    <Link href='/status'>
                        <div className={`mt-6 ml-1.5 flex items-center justify-center h-10 w-10 ${pathname === '/status' ? 'bg-gray-300 border-none border-2 rounded-full' : null}`}>
                            <LuCircleDashed className="cursor-pointer" color='#54656f' size={24} />
                        </div>
                    </Link>
                    <div className="mt-6 ml-1.5 h-10 w-10 flex items-center justify-center">
                        <GrHistory className="cursor-pointer" color='#54656f' size={22} />
                    </div>
                    <div className="mt-6 ml-1.5 h-10 w-10 flex items-center justify-center">
                        <RiInboxArchiveFill className="cursor-pointer" color='#54656f' size={24} />
                    </div>
                    <div className="mt-6 ml-1.5 h-10 w-10 flex items-center justify-center">
                        <IoIosStarOutline className="cursor-pointer" color='#54656f' size={24} />
                    </div>
                </div>
                <div>
                    <div className='mb-5'>
                        <IoSettingsOutline className="cursor-pointer" color='#54656f' size={24} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar