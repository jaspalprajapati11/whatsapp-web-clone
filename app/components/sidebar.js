import React from 'react'
import { useState } from 'react'
import { BsChatRightTextFill } from "react-icons/bs";
import { MdPeople } from "react-icons/md";
import { PiChatTeardropTextLight } from "react-icons/pi";
import { GrHistory } from "react-icons/gr";
import { RiInboxArchiveFill } from "react-icons/ri";
import { IoIosStarOutline } from "react-icons/io";
import { RiChatNewLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image'
import { PiChecksBold } from "react-icons/pi";
import { BiCheck } from "react-icons/bi";
import { BiCheckDouble } from "react-icons/bi";
import { PiChecksLight } from "react-icons/pi";
import { IoVideocam } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { IoMdMic } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";

const Sidebar = () => {
    return (
        <>
            <div className="flex flex-col items-center border basis-16 bg-slate-100">
                <div className="mt-6 border-2 h-10 w-10 flex items-center justify-center bg-gray-300 border-none rounded-full">
                    <div className="relative flex items-center borderrounded-md shadow-sm">
                        <div className="border rounded-full h-5 w-5 bg-green-400 pointer-events-none absolute inset-y-0 left-3 -top-6 flex items-center justify-center">
                            <p className="text-xs text-white">5</p>
                        </div>
                    </div>
                    <BsChatRightTextFill className="cursor-pointer" color='#54656f' size={20} />
                </div>
                <div className="mt-6">
                    <MdPeople className="cursor-pointer" color='#54656f' size={24} />
                </div>
                <div className="mt-6">
                    <PiChatTeardropTextLight className="cursor-pointer" color='#54656f' size={24} />
                </div>
                <div className="mt-6">
                    <GrHistory className="cursor-pointer" color='#54656f' size={22} />
                </div>
                <div className="mt-6">
                    <RiInboxArchiveFill className="cursor-pointer" color='#54656f' size={24} />
                </div>
                <div className="mt-6">
                    <IoIosStarOutline className="cursor-pointer" color='#54656f' size={24} />
                </div>
            </div>
        </>
    )
}

export default Sidebar