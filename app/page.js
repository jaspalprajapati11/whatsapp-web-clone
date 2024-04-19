"use client"
import { useState } from 'react'
import { RiChatNewLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image'
import { PiChecksLight } from "react-icons/pi";
import { IoVideocam } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import Sidebar from './components/sidebar';
import { IoFilter } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const [activeUser, setActiveUser] = useState({
    name: "Jaspal",
    avatar: '/Jaspal.jpeg',
    isActive: true,
    id: 1
  })
  const users = [
    {
      name: "Jaspal",
      avatar: '/Jaspal.jpeg',
      isActive: true,
      id: 1
    },
    {
      name: "Virat Kohli",
      avatar: '/Virat.jpg',
      isActive: false,
      id: 2
    },
    {
      name: "Rohit Sharma",
      avatar: '/Rohit.jpg',
      isActive: false,
      id: 3
    },
  ]


  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="flex flex-col basis-5/12">
        <div className="flex flex-col justify-center items-center border basis-1/5">
          <div className="flex justify-between h-14 w-11/12">
            <div>
              <h2 className="text-2xl font-bold">Chats</h2>
            </div>
            <div className="flex w-14 justify-between">
              <div>
                <RiChatNewLine className="cursor-pointer" color='#54656f' size={20} />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <IoIosMenu className="cursor-pointer" color='#54656f' size={20} />
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
          <div className="flex w-11/12">
            <div className='basis-96'>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="text-gray-500 sm:text-sm">
                    <IoIosSearch color='#54656f' size={22} />
                  </span>
                </div>
                <input type="text" name="chat" id="chat" className="bg-slate-100 block w-full rounded-md border-none py-1.5 pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-slate-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6" placeholder="Search" />
              </div>
            </div>
            <div className='flex justify-end items-center ml-4'>
              <IoFilter className='cursor-pointer' color='#54656f' size={20} />
            </div>
          </div>
        </div>
        <div className="grow">
          {
            users.map((user) => {
              return <>
                <div onClick={() => {
                  setActiveUser(user)
                }} key={user.id} className={"flex h-20 cursor-pointer hover:bg-slate-100 " + (user.isActive ? "bg-slate-100" : null)}>
                  <div className="basis-24 flex justify-center items-center">
                    <div className=" h-14 w-14 rounded-full object-fill">
                      <Image
                        src={user.avatar}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className="rounded-full items-stretch"
                      />
                    </div>
                  </div>
                  <div className="flex grow items-center border-b">
                    <div className="basis-11/12 h-14">
                      <div>
                        <h2>{user.name}</h2>
                      </div>
                      <div className="flex">
                        <PiChecksLight className="ml-1 mr-2  text-slate-500" size={24} />
                        <p className="text-sm text-slate-500">Hello how are you??</p>
                      </div>
                    </div>
                    <div className="h-14">
                      <p className="mt-3 mr-5 text-xs text-slate-500">11:11pm</p>
                    </div>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>
      <div className="flex flex-col  basis-4/6">
        <div className="flex basis-16 bg-slate-100">
          <div className="flex basis-20 justify-center items-center">
            <div className=" h-10 w-10 rounded-full object-fill">
              <Image
                src={activeUser.avatar}
                width={100}
                height={100}
                alt="Picture of the author"
                className="rounded-full items-stretch"
              />
            </div>
          </div>
          <div className=" basis-4/6 flex items-center">
            <p>{activeUser.name}</p>
          </div>
          <div className="flex items-center justify-between grow ml-2 mr-8">
            <div>
              <IoVideocam className="text-slate-500 cursor-pointer" size={24} />
            </div>
            <div>
              <IoIosSearch className="text-slate-500 cursor-pointer" size={24} />
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IoIosMenu className="text-slate-500 cursor-pointer mt-2" size={24} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Contact Info</DropdownMenuItem>
                  <DropdownMenuItem>Select Messages</DropdownMenuItem>
                  <DropdownMenuItem>Close Chat</DropdownMenuItem>
                  <DropdownMenuItem>Mute Notifications</DropdownMenuItem>
                  <DropdownMenuItem>Disappearing messages</DropdownMenuItem>
                  <DropdownMenuItem>Clear chat</DropdownMenuItem>
                  <DropdownMenuItem>Delete chat</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                  <DropdownMenuItem>Block</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="bg-[url('/chatBackground2.jpg')] grow">
          <div className="w-10/12 ml-16">
            <div className="flex justify-start mt-5">
              <div className="max-w-58 rounded overflow-hidden shadow-lg bg-white">
                <div className="px-4 py-1">
                  <div>
                    <p className="text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                  <div className="flex justify-end mt-1">
                    <p className="text-gray-700 text-xs">
                      11:11pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-5">
              <div className="max-w-58 rounded overflow-hidden shadow-lg bg-lime-200">
                <div className="px-4 py-1">
                  <div>
                    <p className="text-gray-700 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                  </div>
                  <div className="flex justify-end mt-1">
                    <p className="text-gray-700 text-xs">
                      11:11pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex basis-16 bg-slate-100">
          <div className="flex items-center justify-center basis-20">
            <IoMdAdd className="cursor-pointer text-slate-500" size={30} />
          </div>
          <div className="grow">
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">
                  <MdEmojiEmotions className="cursor-pointer text-slate-500" size={22} />
                </span>
              </div>
              <input type="text" name="chat" id="chat" className="bg-white block w-full h-12 rounded-md border-none py-1.5 pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-slate-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none sm:text-sm sm:leading-6" placeholder="Type a message" />
            </div>
          </div>
          <div className="flex items-center justify-center basis-20">
            <IoMdMic className="cursor-pointer text-slate-500" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
