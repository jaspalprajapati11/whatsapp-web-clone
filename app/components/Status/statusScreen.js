"use client"
import React from 'react'
import { FaLock } from 'react-icons/fa'
import { useState } from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image'
import { IoFilter } from "react-icons/io5";
import { PiChecksLight } from "react-icons/pi";
import { BsPlusCircleFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const StatusScreen = () => {
  const [activeUser, setActiveUser] = useState({
    name: "Jaspal",
    avatar: '/Jaspal.jpeg',
    isActive: true,
    id: 1
  })
  const statusData = [
    {
      name: "Virat Kohli",
      avatar: '/Virat.jpg',
      time: 'Today at 10:45 pm',
      id: 1
    },
    {
      name: "Rohit Sharma",
      avatar: '/Rohit.jpg',
      time: 'Today at 10:45 pm',
      id: 2
    },
    {
      name: "De Villiers",
      avatar: '/Abd.jpg',
      time: 'Today at 10:45 pm',
      id: 3
    },
    {
      name: "Bumrah",
      avatar: '/Bumrah.jpg',
      time: 'Today at 10:45 pm',
      id: 4
    },
    {
      name: "David Miller",
      avatar: '/Miller.jpg',
      time: 'Today at 10:45 pm',
      id: 5
    },
  ]
  return (
    <>
      <div className="flex flex-col basis-1/2">
        <div className="flex flex-col justify-center items-center border-b-8 basis-1/5">
          <div className="flex justify-between h-14 w-11/12 p-2">
            <div>
              <h2 className="text-xl font-bold">Status</h2>
            </div>
            <div className="flex w-14 justify-between">
              <div>
                <RiChatNewLine className="cursor-pointer" color='#54656f' size={20} />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDotsVertical className="cursor-pointer" color='#54656f' size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>New Group</DropdownMenuItem>
                    <DropdownMenuItem>Select Chats</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="flex w-11/12 mr-6">
            <div className='flex justify-center items-center basis-16'>
              <div className="relative flex items-center borderrounded-md shadow-sm">
                <div className="rounded-full h-5 w-5 bg-white pointer-events-none absolute inset-y-0 left-6 top-1 flex items-center justify-center">
                  <BsPlusCircleFill size={16} className='text-teal-600 relative' />
                </div>
              </div>
              <Image
                src={'/Jaspal.jpeg'}
                width={40}
                height={40}
                alt="Picture of the author"
                className="rounded-full items-stretch"
              />
            </div>
            <div>
              <p className='text-md text-gray-600'>My Status</p>
              <p className='text-xs text-gray-500'>Click to add status updates</p>
            </div>
          </div>
        </div>
        <div className="grow">
          <div className='p-5 ml-5'>
            <h3 className='text-teal-600 font-normal'>RECENT</h3>
          </div>
          {
            statusData.map((status) => {
              return <>
                <div onClick={() => {
                  setActiveUser(user)
                }} key={status.id} className={"flex h-20 cursor-pointer hover:bg-slate-100"}>
                  <div className="basis-24 flex justify-center items-center">
                    <div className="h-12 w-12 rounded-full object-fill border-2 border-teal-600 p-0.5">
                      <Image
                        src={status.avatar}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="rounded-full items-stretch"
                      />
                    </div>
                  </div>
                  <div className="flex grow items-center border-b mt-3 -ml-3">
                    <div className="basis-11/12 h-14">
                      <div>
                        <h3>{status.name}</h3>
                      </div>
                      <div className="flex">
                        <p className="text-sm text-slate-500">{status.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>
      <div className="flex flex-col basis-4/6 bg-slate-100 items-center">
        <div className='mt-28'>
          <Image
            src='/Whatsapp.png'
            height={300}
            width={350}
          />
        </div>
        <div className='mt-5'>
          <p className='text-3xl font-extralight text-gray-600'>Download WhatsApp for Windows</p>
        </div>
        <div className='w-3/4 mt-5'>
          <p className='text-sm text-gray-500 text-center'>Make calls, share your screen and get a faster experience when you download the Windows app.</p>
        </div>
        <div className='mt-5'>
          <div className='flex h-10 w-52 rounded-3xl bg-teal-600 justify-center items-center'>
            <p className='text-sm text-white font-medium'>Get from Microsoft Store</p>
          </div>
        </div>
        <div className='flex mt-32 gap-1'>
          <FaLock size={12} className='text-gray-400 mt-1' />
          <p className='text-sm text-gray-400'>Your personal messages are end-to-end encrypted</p>
        </div>
      </div>
    </>
  )
}

export default StatusScreen