import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Consult = () => {
  return (
    <div className='flex justify-center items-center bg-[#E17413] h-auto'>
        <div className='flex justify-center items-center gap-10 my-40 w-full max-w-4xl'>
            <div className='flex flex-col gap-6 w-full max-w-sm text-white'>
                <h1 className='font-bold text-6xl'>Got Questions?</h1>
                <p className='text-md'>
                    If you have questions or you'd just prefer a personalized approach, we invite you to schedule a consultation with our talent acquisition experts.
                    During this call, we'll delve deeper into your specific needs, discuss your business goals, and provide tailored solutions.
                </p>
                <p className='text-lg font-bold'>
                    We are happy to get on a call with you to explore how 2am.ng can elevate the technology stack of your business.
                </p>
                <Link to='/book-consultant' className='px-6 py-4 flex justify-center items-center gap-5 bg-black text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500 w-[60%]'>
                    <p>Book a Consultant</p> <FaArrowCircleRight />
                </Link>
            </div>
            <div className='w-full max-w-sm'>
                <img src="https://2am.ng/wp-content/uploads/2024/08/2am.ng__001.jpeg" alt="Consult" className='w-full'/>
            </div> 
        </div>
    </div>
  )
}

export default Consult