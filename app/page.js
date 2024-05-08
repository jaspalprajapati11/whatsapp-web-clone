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
import Sidebar from './components/Common/sidebar';
import { IoFilter } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ChatScreen from './components/Home/chatScreen';

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <ChatScreen />
    </div>
  );
}
