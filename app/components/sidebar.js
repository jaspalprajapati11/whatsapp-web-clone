import React from 'react'
import { BsChatRightTextFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { GrHistory } from "react-icons/gr";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-between border basis-16 bg-slate-100">
                <div>
                    <div className="mt-6 border-2 h-10 w-10 flex items-center justify-center bg-gray-300 border-none rounded-full">
                        <div className="relative flex items-center borderrounded-md shadow-sm">
                            <div className="border rounded-full h-5 w-5 bg-green-400 pointer-events-none absolute inset-y-0 left-3 -top-6 flex items-center justify-center">
                                <p className="text-xs text-white">5</p>
                            </div>
                        </div>
                        <BsChatRightTextFill className="cursor-pointer" color='#54656f' size={20} />
                    </div>
                    <div className="mt-6 ml-1.5">
                        <MdPeople className="cursor-pointer" color='#54656f' size={24} />
                    </div>
                    <div className="mt-6 ml-1.5">
                        <PiChatTeardropTextLight className="cursor-pointer" color='#54656f' size={24} />
                    </div>
                    <div className="mt-6 ml-1.5">
                        <GrHistory className="cursor-pointer" color='#54656f' size={22} />
                    </div>
                    <div className="mt-6 ml-1.5">
                        <RiInboxArchiveFill className="cursor-pointer" color='#54656f' size={24} />
                    </div>
                    <div className="mt-6 ml-1.5">
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