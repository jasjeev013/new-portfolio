import React from 'react'
import Navbar from '../components/Navbar'
import IntroductionSection from '../components/IntroductionSection'
import { cn } from '@/lib/utils'


const page = () => {
    return (
        <div className='bg-[#F0E3E3] dark:bg-[#010304] h-screen'>
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
                    <div className=" w-[calc(100%-18rem)] min-h-screen border-l-[1px] border-r-[1px] border-black/10 dark:border-l-[1px] dark:border-r-[1px] dark:border-white/10 p-4">
                        <Navbar />
                        <IntroductionSection />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page
