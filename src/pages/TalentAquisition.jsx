import React from 'react'
import Hero2 from '../components/Hero2'
import Info from '../components/solutions/Info'
import HIW from '../components/solutions/HIW'
import Benefits from '../components/solutions/Benefits'
import Faq from '../components/solutions/Faq'
import Consult from '../components/solutions/Consult'
import { scroller } from "react-scroll";


const TalentAquisition = () => {

  const scrollToSection = () => {
      scroller.scrollTo("target-section", {
        duration: 500,
        smooth: true,
        offset: -70, // Adjust for fixed headers
      });
    };

  const pointData = [
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-768x960.jpg", 
      title:"Talent Sourcing", 
      content:"We begin by collaborating with you to understand your specific talent needs, company culture, and desired candidate profiles. Utilizing advanced techniques and our digital talent management suite, we source candidates from various channels." 
    },
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-1-768x960.png", 
      title:"Rigorous Screening", 
      content:"We implement a comprehensive screening process that includes resume assessments, skills tests, and reference checks. We use a personalized matching approach based on your company culture and job requirements, presenting only the most qualified candidates." 
    },
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-768x960.webp", 
      title:"Interview Facilitation", 
      content:"We can assist in conducting interviews, and providing interview guides and tools for effective evaluation. Also, you get our support throughout the offer negotiation process and provide onboarding assistance to ensure a smooth transition for new hires." 
    },
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-1-768x960.jpg", 
      title:"Talent Management", 
      content:"We provide comprehensive talent management services in an outsourcing model, covering the entire employee life cycle from recruitment to exit. Our services include onboarding, performance management, employee satisfaction & engagement initiatives, employee relations management and payroll administration to ensure your organization retains top talent efficiently and effectively." 
    },
  ]

  const benefits = [
    {
      id: 1,
      title: "Reduced Time-to-Hire",
      content: "Our Talent Acquisition and Management service is designed to significantly reduce the time it takes to fill critical roles within your organization. By leveraging advanced candidate sourcing techniques, state-of-the-art recruitment technology, and our extensive industry network, we streamline the hiring process from start to finish.."
    },
    {
      id: 2,
      title: "Enhanced Retention",
      content: "Our service goes beyond just filling positions; we focus on long-term talent management to enhance employee retention. By providing ongoing support and management, we help ensure that new hires are successfully integrated into your team and remain engaged and satisfied in their roles.."
    },
    {
      id: 3,
      title: "Improved Quality of Hire",
      content: "Through rigorous screening, comprehensive assessments, and behavioral interviews, we evaluate candidates for both technical competencies and cultural fit. This thorough vetting process enables us to identify professionals who not only possess the required skills and experience but also align with your company’s values and culture."
    },
    {
      id: 4,
      title: "Scalable Solutions",
      content: "We understand that your talent needs may vary depending on your business objectives and growth strategies. Our scalable solutions are designed to adapt to your unique requirements, whether you are looking to fill a single position or build an entire team."
    }
  ]

  const faqs = [
    {
      id: 1,
      title: "What types of positions can you recruit for?",
      content: "We can help you recruit for a wide range of positions across various industries. We have experience filling roles in tech, engineering, marketing, sales, and other sectors."
    },
    {
      id: 2,
      title: "What is your screening process like?",
      content: "Our screening process typically includes resume review, skills testing, reference checks, and potentially pre-employment assessments relevant to the specific role."
    },
    {
      id: 3,
      title: "How do you ensure a good cultural fit for my company?",
      content: "We take company culture seriously. We gather detailed information about your culture and tailor our candidate matching process to ensure candidates align with your values and work environment."
    },
    {
      id: 4,
      title: "What are your fees for this service?",
      content: "Our Talent Acquisition and Management service fees are tailored to your specific needs and the complexity of the position. We offer a transparent pricing structure and can discuss the fee structure in detail during our initial consultation."
    },
    {
      id: 5,
      title: "How long does it typically take to fill a position?",
      content: "The time it takes to fill a position can vary depending on the complexity of the role and the talent pool. However, our goal is to complete the recruitment process as efficiently as possible while maintaining high-quality standards."
    },
    {
      id: 6,
      title: "Can you help with onboarding new hires?",
      content: "Yes, we can assist with the onboarding process by providing tools and resources to ensure a smooth transition for your new hires."
    }
  ]

  return (
    <div className='mt-20'>
      <Hero2 
        title='Talent Acquisition and Management'
        img='https://2am.ng/wp-content/uploads/2024/08/African-Web-Developer.png'
        bgColor='#E17413'
        scrollToSection={scrollToSection}
      />
      <Info 
        id='target-section'
        title="Advanced candidate sourcing techniques"
        para1="2AM TECH’s Talent Acquisition and Management service is designed to streamline your hiring process and ensure that you attract 
              and retain the best talent in the industry."
        para2="Our comprehensive approach includes identifying, attracting, and managing skilled professionals who align with your company’s 
              needs and culture. By leveraging advanced recruitment technology and deep industry expertise, we provide end-to-end solutions 
              that save you time and resources while enhancing the quality of your hires."
      />
      <HIW 
        points={pointData}
      />
      <Benefits 
          benefits={benefits}
      />
      <Faq 
        faqs={faqs}
      />
      <Consult />
    </div>
  )
}

export default TalentAquisition