import React, { useState } from 'react'
import { FaArrowRight, FaArrowUp } from 'react-icons/fa6'

const Benefits = ({ benefits }) => {
  const [openIndexes, setOpenIndexes] = useState([])

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      // If already open, close it
      setOpenIndexes(openIndexes.filter(i => i !== index))
    } else {
      // Otherwise, open it
      setOpenIndexes([...openIndexes, index])
    }
  }

  // Split the benefits into two columns
  const half = Math.ceil(benefits.length / 2)
  const benefitsLeft = benefits.slice(0, half)
  const benefitsRight = benefits.slice(half)

  return (
    <div className="h-auto py-8 flex flex-col gap-10 justify-center items-center">
      <div className="flex flex-col items-center gap-3 mt-20">
        <h1 className="text-4xl font-bold">Benefits</h1>
        <p className="text-sm text-[#E17A1B]">Why should you work with us?</p>
      </div>

      <div className="flex gap-8 mb-30 w-full max-w-4xl justify-center">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {benefitsLeft.map((benefit, index) => (
            <div
              key={index}
              onClick={() => handleToggle(index)}
              className="p-6 cursor-pointer flex flex-col gap-2 transition-all duration-900 ease-in-out"
              style={{
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.05), 0 0 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex justify-between items-center">
                <h2 className={`font-bold text-xl uppercase ${ openIndexes.includes(index) && 'text-[#E17413]'}`}>{benefit.title}</h2>
                <button type="button">
                  {openIndexes.includes(index) ? <FaArrowUp className='text-[#E17413]'/> : <FaArrowRight />}
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-900 ease-in-out  ${openIndexes.includes(index) ? 'max-h-90 opacity-100 p-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-md text-gray-600 mt-2">{benefit.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {benefitsRight.map((benefit, index) => (
            <div
              key={index + half}
              onClick={() => handleToggle(index + half)}
              className="p-6 cursor-pointer flex flex-col gap-2 transition-all duration-900 ease-in-out"
              style={{
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.05), 0 0 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex justify-between items-center">
                <h2 className={`font-bold text-xl uppercase ${ openIndexes.includes(index + half) && 'text-[#E17413]'}`}>{benefit.title}</h2>
                <button type="button">
                  {openIndexes.includes(index + half) ? <FaArrowUp className='text-[#E17413]'/> : <FaArrowRight />}
                </button>
              </div>
              <div className={`overflow-hidden transition-all duration-900 ease-in-out ${openIndexes.includes(index + half) ? 'max-h-90 opacity-100 p-3' : 'max-h-0 opacity-0'}`}>
                <p className="text-md text-gray-600 mt-2">{benefit.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
