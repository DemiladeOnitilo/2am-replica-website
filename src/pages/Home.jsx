import React from 'react'
import Hero from '../components/home/Hero'
import { Link } from "react-router-dom"
import { FaArrowRight } from 'react-icons/fa'
import SearchBar from '../components/navbar/SearchBar'
import { jobs } from '../components/home/jobs'
import TalentsContainer from '../components/TalentsContainer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { scroller } from "react-scroll";
import TalentsSkills from '../components/TalentsSkills'
import Clients from '../components/Clients'

const Home = () => {

  const scrollToSection = () => {
    scroller.scrollTo("target-section", {
      duration: 500,
      smooth: true,
      offset: -70, // Adjust for fixed headers
    });
  };


  return (
    <div>

      <Hero scrollToSection={scrollToSection} />

      <div id='target-section' className='relative h-[100vh] flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/07/vision.png)] bg-no-repeat bg-cover scale-140 opacity-20 h-full'></div>
        <div className='relative flex flex-col items-center justify-center px-10 gap-15 z-10'>
          <h1 className='text-7xl text-center font-bold'>
            Your business success is our priority.
          </h1>
          <p className='text-center text-xl leading-8 w-[90%]'>
            We provide top-tier talent solutions tailored to your unique needs, ensuring you have access to the best professionals through our expertise in talent acquisition, 
            recruitment process outsourcing, and workforce management. Our personalized approach, innovative strategies, and commitment to excellence make us the trusted partner 
            you need to thrive in a competitive market. Additionally, we deliver comprehensive business automation and ERP solutions to streamline your operations and boost efficiency.
          </p>
          <Link
            to='/about'
            className="flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold px-6 py-4 hover:shadow-2xl/20 transition duration-300 "
          >
            LEARN MORE
            <FaArrowRight />
          </Link>
        </div>
      </div>


      <div className='relative h-[100vh] overflow-hidden bg-[#BE0900] flex justify-center items-center'>
        <div className='absolute inset-0 z-0 bg-[url(https://2am.ng/wp-content/uploads/2024/07/2am.ng-Main-Banner.jpg)] bg-no-repeat bg-cover bg-left opacity-10 transform scale-110'></div> 
        <div className='flex justify-center items-center gap-10 px-10 z-10'>
          <div>
            <img src="https://2am.ng/wp-content/uploads/2024/07/Homepage-2nd-Image_2am.ng_.jpg" alt="Talents" />
          </div>
          <div className='flex flex-col gap-10 text-white w-[35%]'>
            <h1 className='text-6xl'>
              Hire expert tech talents
              <span className='font-bold'> for any job, from anywhere</span>
            </h1>
            <p className='text-xl font-semibold'>
              Discover the perfect blend of expertise and innovation to drive your business forward. At 2AM TECH, we connect you with top professionals who bring your vision to life.
            </p>
            <div className='text-black'>
              <SearchBar isHome={true} />
            </div>
          </div>
        </div>

      </div>

      <div className='h-[135vh] flex flex-col items-center gap-10'>
        <div className='flex flex-col justify-center items-center gap-2 mt-25'>
          <h1 className='text-4xl font-bold '>Find your next job</h1>
          <p className='text-lg text-gray-600'>Explore new projects by categories</p>
          <span className='h-1 w-40 rounded bg-[#E17A1B] mt-3'></span>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-[60%]  flex flex-wrap justify-center items-center gap-8'>
            {jobs.map((job, index) => (
                <div key={index} className='group perspective w-64 h-64'>
                    <div className='relative w-full h-full transition-transform duration-600 transform-style-preserve-3d group-hover:rotate-y-180 '>
                        <div className='absolute backface-hidden bg-white border border-gray-200 flex flex-col justify-center items-center text-center gap-3 h-65 w-65 px-4'>
                            <img src={job.img} alt={job.title} className='h-17 object-contain'/>
                            <h1 className='text-xl'>{job.title}</h1>
                        </div>
                        <div className='absolute backface-hidden rotate-y-180 bg-white border border-gray-200  flex justify-center items-center text-center text-blue-500 h-65 w-65 px-4 shadow-xl/40'>
                            <Link to='/jobs' className='flex items-center gap-1'>
                                Explore <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
                
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center text-center'>
            <Link to='/jobs ' className='bg-flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold px-11 py-4 hover:shadow-2xl/40 transition duration-300 '>
                View All
            </Link>
        </div>
      </div>

      <div className='h-[100vh] bg-gray-100 flex justify-center items-center'>
        <div className='flex justify-center items-center gap-10 px-10 z-10'>
          <div>
            <img src="https://2am.ng/wp-content/uploads/2024/07/Second-Image-2.jpg" alt="Talents acquisition" />
          </div>
          <div className='flex flex-col gap-10 w-[35%]'>
            <div className='flex flex-col gap-3'>
              <h1 className='text-4xl font-bold'>
                Redefining Talent Acquisition in Africa
              </h1>
              <p className='text-xl text-gray-400'>
                Transforming Businesses, Empowering Talent
              </p>
              <span className='h-1 w-40 rounded bg-[#E17A1B] mt-3'></span>
            </div>
            <div className='flex flex-col gap-3'>
              <h2 className='text-3xl font-bold'>
                Your strategic partner for technology capacity development
              </h2>
              <ul className='text-gray-400 text-lg list-disc list-inside'>
                <li>
                  <span className='text-black font-bold'>Rigorous Talent Vetting:</span> We meticulously screen and select top-tier talent, ensuring they meet our stringent quality standards.
                </li>
               <li>
                 <span className='text-black font-bold'>Dedicated Project Management:</span> Our experienced team oversees every project, guaranteeing seamless collaboration and on-time delivery.
                </li>
                <li>
                  <span className='text-black font-bold'>Data Integrity and Security:</span> We prioritize data protection, giving you peace of mind.
                </li>
              </ul>
            </div>
            
            <div className='mt-10'>
              <Link to='/how-it-works ' className='bg-flex items-center justify-center gap-4 bg-[#E17A1B] rounded text-white font-bold px-11 py-4 hover:shadow-2xl/40 transition duration-300 '>
                Learn More
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      <TalentsContainer />

      <TalentsSkills />

      <Clients />

      <div className='h-auto bg-[#71CEFF] flex flex-col gap-12'>
        <div className='flex justify-center items-center text-center gap-2 mt-40'>
          <h1 className='text-4xl font-bold'>
            Are you a talent?
            <br />
            Find the job that suits you
          </h1>
        </div>
        <div className='flex justify-center items-center gap-40 mb-30'> 
          <div className='font-semibold'>
            <h1>By Skills</h1>
            {[
              'Agile Methodologies',
              'Roadmap Planning',
              'User Story Mapping',
              'RESTful API Design',
              'Cloud Data Services (AWS Redshift, Google BigQuery)',
              'Frontend Technologies',
              'Backend Technologies',
              'Android Development (Java/Kotlin)',
              'View All'
            ].map((skill) => (
              <div key={skill} className='hover:text-[#E17A1B] hover:translate-x-4 transition-all ease-in-out duration-400'>
                <ul>
                  <li className='mt-2'>
                    <Link to='/jobs'>
                      {skill}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className='font-semibold'>
            <h1>By Categories</h1>
            {[
              'Product/Program Management',
              'Software Development',
              'Web Development',
              'Mobile App Development',
              'Cloud Infrastructure',
              'DevOps',
              'Quality Assurance and Testing',
              'Database Administration',
              'View All'
            ].map((skill) => (
              <div key={skill} className='hover:text-[#E17A1B] hover:translate-x-4 transition-all ease-in-out duration-400'>
                <ul>
                  <li className='mt-2'>
                    <Link to='/jobs'>
                      {skill}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className='font-semibold'>
            <h1>By Locations</h1>
            {[
              'Outside Africa',
              'Nigeria',
              'Ethiopia',
              'Kenya',
              'Egypt',
              'South Africa',
              'Ghana',
              'Canada',
              'View All'
            ].map((skill) => (
              <div key={skill} className='hover:text-[#E17A1B] hover:translate-x-4 transition-all ease-in-out duration-400'>
                <ul>
                  <li className='mt-2'>
                    <Link to='/jobs'>
                      {skill}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home