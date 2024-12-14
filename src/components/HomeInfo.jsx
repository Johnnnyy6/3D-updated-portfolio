import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Jonathan</span>👋
            <br/>
            A Software Engineer from Texas!
        </h1>
    ),
    2:(
        <InfoBox
        text="Throughout my journey as a full-stack software engineer, I’ve had the privilege of working on amazing opportunities that have helped me build a diverse and versatile skill set"
        link="/about"
        btnText="Learn More"
        />
    ),
    3:(
        <InfoBox
        text="Over the years, I’ve worked on some exciting projects that showcase my creativity and technical skills—this website included!"
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4:(
        <InfoBox
        text="Need to reach out to me? I'm just a few keystrokes away"
        link="/contact"
        btnText="Let's talk"
        />
    ),
}



const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo