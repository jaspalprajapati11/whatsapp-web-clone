import React from 'react'
import { FaLock } from 'react-icons/fa'
import Image from 'next/image'


const DownloadWhatsapp = () => {
    return (
        <>
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
        </>
    )
}

export default DownloadWhatsapp