"use client"
import Image from 'next/image'
import { FaLock } from "react-icons/fa";
import DownloadWhatsapp from '../Common/downloadWhatsapp';


const CommunityScreen = () => {
  return (
    <>
      <div className="flex flex-col basis-1/2">
        <div className="flex justify-between items-center h-14 w-11/12 ml-8 mt-3">
          <h2 className="text-xl font-bold">Communities</h2>
        </div>
        <div className='flex justify-center'>
          <Image
            src='/Community.png'
            height={300}
            width={400}
          />
        </div>
        <div className='flex justify-center mt-5'>
          <p className='text-xl font-bold'>Stay Connect with a community</p>
        </div>
        <div className='flex justify-center mt-5 w-3/4 self-center'>
          <p className='text-sm text-center text-gray-500 font-light'>
            Communities bring members together in topic base groups,
            and make it easy to get admin announcements. Any community
            you're added to will appear here.
          </p>
        </div>
        <div className='mt-10 self-center'>
          <div className='flex h-10 w-52 rounded-3xl bg-teal-600 justify-center items-center'>
            <p className='text-sm text-white font-medium'>Start your community</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col basis-4/6 bg-slate-100 items-center">
        <DownloadWhatsapp/>
      </div>
    </>
  )
}

export default CommunityScreen