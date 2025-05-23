import React from 'react'
import Hero2 from '../components/Hero2'
import Info from '../components/solutions/Info'
import HIW from '../components/solutions/HIW'
import Benefits from '../components/solutions/Benefits'
import Faq from '../components/solutions/Faq'
import Consult from '../components/solutions/Consult'
import { scroller } from "react-scroll";


const EnterpriseSoftware = () => {

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
      title:"Project Inception and Planning", 
      content:"Our process begins with a deep understanding of your business goals and challenges. Through collaborative discussions, we define project scope, set clear objectives, and develop a comprehensive roadmap." 
    },
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-1-768x960.png", 
      title:"Project Execution", 
      content:"With a clear plan in place, we assemble a dedicated team of skilled professionals to execute your project. Our agile approach ensures flexibility and adaptability, allowing us to respond to evolving requirements. We leverage industry best practices and cutting-edge technologies to deliver exceptional results." 
    },
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-768x960.webp", 
      title:"Quality Assurance", 
      content:"Quality is paramount to us! We implement rigorous testing procedures throughout the development process to identify and address potential issues. From unit and integration testing to user acceptance testing, we ensure your software meets the highest standards." 
    },
    { 
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-1-768x960.jpg", 
      title:"Deployment and Implementation", 
      content:"Once the software is perfected, we seamlessly deploy it into your environment. Our support extends beyond launch, with comprehensive training for your team and ongoing maintenance to optimize performance." 
    },
  ]

  const benefits = [
    {
      id: 1,
      title: "End-to-End Project Management",
      content: "Our approach ensures that all aspects of your project are meticulously planned, executed, and delivered. By overseeing every detail, from the initial scoping and requirements gathering to development, testing, and post-implementation support, we ensure a seamless project experience."
    },
    {
      id: 2,
      title: "Resource Allocation",
      content: "Effective resource management is key to the success of any project. Our team excels at the efficient allocation and management of resources, ensuring that every aspect of your project is optimized for success. By strategically deploying human, technical, and financial resources, we maximize productivity and minimize waste, driving your project toward successful completion within the desired timeframe and budget."
    },
    {
      id: 3,
      title: "Experienced Project Administrators",
      content: "Our team is composed of seasoned project administrators who bring a wealth of experience to managing diverse IT projects across various industries. With a deep understanding of best practices and methodologies, our professionals ensure that each project is delivered on time, within scope, and on budget."
    },
    {
      id: 4,
      title: "Communication & Risk Management",
      content: "Transparent and regular communication with all stakeholders is a cornerstone of our project management philosophy. We provide frequent updates and maintain open lines of communication to keep everyone informed and engaged throughout the project lifecycle. Additionally, we proactively identify potential risks and implement effective mitigation strategies to prevent issues from escalating."
    },
    {
      id: 5,
      title: "Customized Solutions",
      content: "We recognize that every business has unique needs and goals. Our project management services are highly customizable, allowing us to tailor our approach to align with your specific business objectives and requirements. Whether you need a complete overhaul of your existing systems or targeted enhancements, our flexible solutions are designed to fit seamlessly into your existing operations, delivering maximum value and impact."
    },
    {
      id: 6,
      title: "Quality Assurance",
      content: "We are committed to delivering projects that meet the highest standards of quality. Our rigorous quality assurance processes are integrated throughout the project lifecycle, from the initial planning stages to final delivery. By conducting thorough testing, validation, and quality checks at every stage, we ensure that your project not only meets but exceeds your expectations."
    },
  ]

  const faqs = [
    {
      id: 1,
      title: "What types of software do you develop?",
      content: "We specialize in developing custom enterprise software solutions tailored to your specific needs. This includes ERP systems, CRM platforms, supply chain management systems, and other business-critical applications."
    },
    {
      id: 2,
      title: "How do you ensure project success?",
      content: "Our success is built on a combination of experienced project managers, skilled developers, and a proven methodology. We emphasize clear communication, risk management, and a focus on delivering value."
    },
    {
      id: 3,
      title: "What is your development process?",
      content: "We follow an agile development approach, which allows for flexibility and adaptability throughout the project. We involve you closely in the process to ensure your requirements are met."
    },
    {
      id: 4,
      title: "How do you handle project changes or scope creep?",
      content: "We have a change management process in place to address project changes effectively. We work with you to assess the impact of changes and adjust the project plan accordingly."
    },
    {
      id: 5,
      title: "What about ongoing support and maintenance?",
      content: "We offer comprehensive post-implementation support, including bug fixes, updates, and enhancements. We can also provide ongoing maintenance and support services to ensure the long-term success of your software."
    }, 
    {
      id: 6,
      title: "How do you protect my intellectual property?",
      content: "We understand the importance of protecting your intellectual property. We have strict confidentiality policies in place and employ security measures to safeguard your data and information."
    }
  ]

  return (
    <div className='mt-20'>
      <Hero2 
        title='Enterprise Software Development'
        img='https://2am.ng/wp-content/uploads/2024/08/software-development-flowchart-diagram-showing-260nw-2284084849.jpg'
        bgColor='#B80A0A'
        scrollToSection={scrollToSection}
      />
      <Info 
        id='target-section'
        title="Expertly managed customized solutions"
        para1="Our Enterprise Software Development service ensures the successful planning, execution, and completion of your 
              IT projects. We offer comprehensive project management solutions tailored to meet your unique business needs."
        para2="Our team of experienced project administrators is dedicated to delivering projects on time, within scope, 
              and on budget. We handle everything from initial project scoping to post-implementation support, allowing you to focus on your core business activities."
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

export default EnterpriseSoftware