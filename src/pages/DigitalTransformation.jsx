import React from 'react'
import Hero2 from '../components/Hero2'
import Info from '../components/solutions/Info'
import HIW from '../components/solutions/HIW'
import Benefits from '../components/solutions/Benefits'
import Faq from '../components/solutions/Faq'
import Consult from '../components/solutions/Consult'
import { scroller } from "react-scroll";


const DigitalTransformation = () => {

  const scrollToSection = () => {
      scroller.scrollTo("target-section", {
        duration: 500,
        smooth: true,
        offset: -70, // Adjust for fixed headers
      });
    };

  const pointData = [
    { 
      id: 1,
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-768x960.jpg", 
      title:"Assessment and Strategy", 
      content:"We begin by conducting a thorough analysis of your operations to identify areas ripe for improvement and digital innovation. Based on these insights, we develop a tailored roadmap outlining the steps necessary to achieve your digital goals." 
    },
    { 
      id: 2,
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-1-768x960.png", 
      title:"Architecture and Design", 
      content:"Next, we focus on designing and implementing a robust digital architecture. This includes crafting a scalable microservices infrastructure, developing data models for insightful analysis, and automating processes for increased efficiency." 
    },
    { 
      id: 3,
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-768x960.webp", 
      title:"Development and Integration", 
      content:"With a solid foundation in place, we build custom software solutions seamlessly integrated with your existing systems. User-friendly interfaces and dashboards are designed to provide clear visibility and interaction with your data. Throughout this process, we prioritize data security to safeguard your valuable information." 
    },
    { 
      id: 4,
      img:"https://2am.ng/wp-content/uploads/2024/08/New-Project-1-768x960.jpg", 
      title:"Deployment and Optimization", 
      content:"Finally, we deploy the transformed solution, monitor its performance closely, and make necessary adjustments. Our commitment to ongoing support ensures optimal operations and continued improvement." 
    },
  ]

  const benefits = [
    {
      id: 1,
      title: "Microservices Architecture",
      content: "Our service focuses on the design and implementation of scalable and flexible microservices architecture. By breaking down large, monolithic applications into smaller, independent services, we enable your business to achieve greater agility and scalability. This modular approach allows for easier updates and maintenance, ensuring that each service can be developed, deployed, and scaled independently, leading to reduced downtime and enhanced system performance."
    },
    {
      id: 2,
      title: "Integration Services",
      content: "We offer seamless integration with existing systems and third-party applications to ensure a smooth and efficient digital transformation journey. Our integration services facilitate the exchange of data across different platforms, enhancing interoperability and reducing the complexity of managing multiple systems. This enables a cohesive and unified digital ecosystem that supports your business objectives."
    },
    {
      id: 3,
      title: "Data Analytics",
      content: "We provide advanced analytics solutions that empower businesses to turn data into actionable insights. Our analytics tools leverage cutting-edge technologies, such as machine learning and artificial intelligence, to deliver comprehensive data analysis. This allows you to identify trends, forecast future outcomes, and make data-driven decisions that can improve your business strategy and enhance overall performance."
    },
    {
      id: 4,
      title: "Custom Solutions",
      content: "Understanding that every business is unique, we provide tailored solutions designed to meet your specific needs. Our team works closely with you to understand your challenges and goals, developing custom strategies that align with your vision. Whether it’s a bespoke application or a specialized tool, our solutions are crafted to fit perfectly within your operational framework, ensuring maximum impact and value."
    },
    {
      id: 5,
      title: "Process Automation",
      content: "Our process automation tools are designed to streamline workflows by automating repetitive and time-consuming tasks. By reducing manual intervention, we help increase operational efficiency, minimize errors, and lower costs. This enables your team to focus on more strategic initiatives, driving innovation and accelerating business growth while ensuring compliance with industry standards."
    },
    {
      id: 6,
      title: "Real-time Monitoring",
      content: "With our real-time monitoring services, you gain continuous visibility into your system’s performance. Our tools provide instant alerts and detailed reports, helping you proactively identify and resolve issues before they impact your business. This ongoing oversight ensures optimal performance, enhances security, and supports a more resilient and responsive IT environment."
    },
  ]

  const faqs = [
    {
      id: 1,
      title: "What is the typical timeline for a digital transformation project?",
      content: "The timeline varies depending on the project’s complexity and scope. We work closely with clients to develop a realistic project plan with clear milestones."
    },
    {
      id: 2,
      title: "How do you ensure data security and privacy?",
      content: "We prioritize data security and implement robust measures to protect sensitive information. Our approach aligns with industry best practices and complies with relevant regulations."
    },
    {
      id: 3,
      title: "What is the return on investment (ROI) for digital transformation?",
      content: "Digital transformation can yield significant ROI through increased efficiency, cost reduction, improved decision-making, and enhanced customer experience. We provide detailed ROI analysis as part of our services."
    },
    {
      id: 4,
      title: "Do you offer training to employees?",
      content: "Yes, we provide comprehensive training to help your employees adapt to new technologies and processes. Our goal is to empower your workforce to fully utilize the benefits of digital transformation."
    },
    {
      id: 5,
      title: "Can you handle complex legacy system integration?",
      content: "We have experience in integrating complex legacy systems into modern digital environments. Our approach involves careful"
    }
  ]

  return (
    <div className='mt-20'>
      <Hero2 
        title='Digital Transformation'
        img='https://2am.ng/wp-content/uploads/2024/08/transformation-concept.jpg'
        bgColor='#007EC0'
        scrollToSection={scrollToSection}
      />
      <Info 
        id='target-section'
        title="Scalable business tools and automations"
        para1="Our Digital Transformation service empowers businesses to streamline operations, enhance data analysis, and automate complex processes."
        para2="By leveraging microservices architecture, we break down monolithic systems into smaller, manageable services that work seamlessly together. 
              Our analytics solutions provide deep insights into business performance, while our process automation tools reduce manual tasks, improve efficiency, 
              and ensure compliance."
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

export default DigitalTransformation