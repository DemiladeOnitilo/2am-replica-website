import React, { useState } from 'react'
import Hero2 from '../components/Hero2'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'

const HowItWorks = () => {

  const [activeStep, setActiveStep] = useState(0)

  const hiringSteps = [
    {
      title: 'Step 1',
      heading: 'Project Submission',
      content: [
        'Clearly outline your project requirements, including scope, budget, and timeline.',
        'Submit your project on our platform.'
      ]
    },
    {
      title: 'Step 2',
      heading: 'Talent Matching & Selection',
      content: [
        'Our expert team carefully reviews your project and matches it with suitable talents from our extensive pool.',
        'We consider factors such as skills, experience, and availability to ensure optimal fit.',
        'You review the profiles of shortlisted talents and select the ones you believe best align with your project.',
        'We conduct further assessments and interviews to validate your choice.'
      ]
    },
    {
      title: 'Step 3',
      heading: 'Agreement & Commencement',
      content: [
        'We negotiate project terms and conditions with both you and the selected talents.',
        'A detailed contract outlining project scope, deliverables, timelines, and payment terms is established.',
        'The project officially begins with the talent assigned to your project.',
        'We provide ongoing project management and support to ensure smooth execution.'
      ]
    },
    {
      title: 'Step 4',
      heading: 'Payment and Quality Assurance',
      content: [
        'We negotiate project terms and conditions with both you and the selected talents.',
        'A detailed contract outlining project scope, deliverables, timelines, and payment terms is established.',
        'The project officially begins with the talent assigned to your project.',
        'We provide ongoing project management and support to ensure smooth execution.',
        'We maintain strict quality control measures throughout the project.',
        'Our team provides regular updates and feedback to ensure project success.'
      ]
    }
  ]


  const hiredSteps = [
    {
      title: 'Step 1',
      heading: 'Create a Stellar Profile',
      content: [
        'Build a comprehensive profile highlighting your skills, experience, and portfolio.',
        'Showcase your expertise and passion for your field.',
        'Once your profile is approved, you become part of our exclusive talent pool.',
        'Our team carefully evaluates your qualifications to match you with suitable projects.'
      ]
    },
    {
      title: 'Step 2',
      heading: 'Project Assignments and Execution',
      content: [
        'Based on your profile and available projects, you may be selected for an interview or assessment.',
        'Successful candidates will be assigned to projects that align with their skills and interests.',
        'Deliver exceptional work within the agreed-upon timeframe and budget.',
        'Maintain open communication with the project manager and client.'
      ]
    },
    {
      title: 'Step 3',
      heading: 'Payment and Recognition',
      content: [
        'You receive timely payments based on the project milestones as outlined in the contract.',
        'A detailed contract outlining project scope, deliverables, timelines, and payment terms is established.'
      ]
    }
  ]

  return (
    <div className='mt-20'>
      <Hero2 
        img='https://2am.ng/wp-content/uploads/2024/08/talent-768x549.jpg'
        title= 'Discover the difference'
        bgColor= '#0092DF'
      />
      <div className='h-auto flex justify-center items-center py-30 pl-30'>
        <div className='flex justify-center items-center gap-10'>
          <div className='flex flex-col gap-6 w-full max-w-3xl'>
            <h1 className='text-4xl font-semibold text-gray-700'>Achieve the right results, with the right people</h1>
            <span className='h-1 w-1/5 bg-[#E17A1B]'></span>
            <p className='text-lg text-gray-400'>
              <span className='font-semibold'>2AM TECH</span> is different from your typical freelance marketplace. 
              We offer a comprehensive talent acquisition and management service designed to streamline your hiring process and deliver exceptional results.
            </p>
          </div>
          <div className='w-full max-w-3xl'>
            <img src="https://2am.ng/wp-content/uploads/2024/08/Talent-management.webp" alt="About" className='h-[300px]' />
          </div>
        </div>
      </div>

      <div className='h-auto bg-gray-100 flex justify-center p-30 gap-10'>
          <div className='w-[30%]'>
            <h1 className='text-6xl font-bold'>How to start hiring!</h1>
          </div>
          <div className='w-[70%]'>
            <div className="">
              {hiringSteps.map((step, index) => (
                <button
                  key={index}
                  className={`px-4 py-4 font-semibold transition-all ${
                    activeStep === index ? 'text-[#E17A1B] bg-[#fad1aa]' : 'text-gray-700'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className='bg-[#fad1aa] p-8'>
              <h3 className="text-2xl font-semibold mb-3">{hiredSteps[activeStep].heading}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {hiringSteps[activeStep].content.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
      </div>

      <div className='flex justify-center items-center gap-10 bg-[#E17413] h-auto'>
        <div className='flex justify-center items-center m-20'>
            <div className='w-[40%] flex flex-col gap-4'>
                <img src="https://2am.ng/wp-content/uploads/2024/08/2am.ng__001.jpeg" alt="Consult" className='h-[400px] w-[500px]'/>
                <Link to='/book-consultant' className='px-4 py-4 flex justify-center items-center gap-5 bg-black text-white hover:bg-white hover:text-black transition-all ease-in-out duration-500 w-[30%]'>
                    <p>Book a Consultant</p> <FaArrowCircleRight />
                </Link>
            </div> 
            <div className='flex flex-col gap-6 text-white w-[50%]'>
                <h1 className='font-bold text-6xl'>Why Choose 2AM TECH</h1>
                <p className='text-md'>
                  Unlike traditional freelance platforms, we offer a full-service solution that takes the hassle out of hiring. 
                  Our rigorous vetting process, dedicated project management, and secure payment system provide you with peace of mind and exceptional results.
                </p>
                <p className='text-lg font-bold'>
                  We are happy to get on a call with you to explore how 2AM TECH can elevate the technology stack of your business.
                </p>
                
            </div>
        </div>
    </div>


    <div className='h-auto flex justify-center items-center py-30 pl-30'>
        <div className='flex justify-center items-center gap-10'>
          <div className='flex flex-col gap-6 w-full max-w-3xl'>
            <h1 className='text-4xl font-semibold text-gray-700'>Advance your career</h1>
            <p className='text-lg text-gray-400'>Get hired for projects you can be proud of</p>
            <span className='h-1 w-1/5 bg-[#E17A1B]'></span>
            <p className='text-lg text-gray-400'>
              Looking for exciting opportunities to build your career as a tech talent and earn a good income? 
              <span className='font-semibold'>2AM TECH</span> connects you to the right employers and projects that will help you showcase your skills for the right fees.
            </p>
          </div>
          <div className='w-full max-w-3xl'>
            <img src="https://2am.ng/wp-content/uploads/2024/08/Remote-Workers-2AM-TECH.jpg" alt="About" className='h-[300px]' />
          </div>
        </div>
      </div>

      <div className='h-auto bg-gray-100 flex justify-center p-30 gap-10'>
          <div className='w-[40%]'>
            <h1 className='text-6xl font-bold'>How to get hired!</h1>
          </div>
          <div className='w-[60%]'>
            <div>
              {hiredSteps.map((step, index) => (
                <button
                  key={index}
                  className={`px-4 py-4 font-semibold transition-all ${
                    activeStep === index ? 'text-[#E17A1B] bg-[#fad1aa]' : 'text-gray-700'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <div className='bg-[#fad1aa] p-8'>
              <h3 className="text-2xl font-semibold mb-3">{hiredSteps[activeStep].heading}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {hiredSteps[activeStep].content.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <div className='mt-10'>
            <Link to='/register' className='py-3 flex justify-center items-center gap-5 bg-[#E17A1B] text-white hover:bg-black rounded-lg transition-all ease-in-out duration-500 w-[15%]'>
                <p>Sign Up</p> <FaArrowCircleRight />
              </Link>
            </div>
          </div>
      </div>

    </div>
  )
}

export default HowItWorks