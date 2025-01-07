import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Jonathan</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I am recent graduate and am pursuing my dreams in the tech world one step at a time.
          I am fullstack Software Engineer and am ready to get out there and leave a positive impact wherever I land.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
      </div>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill, index) => (
          <div className='block-container w-20 h-20'>
            <div className='btn-back rounded-xl'/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img 
              src={skill.imageUrl}
              alt = {skill.name}
              className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Professional Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>I have had many amazing opportunities within amazing companies and have learned so much and am ready
              to apply my skills within my next role.
            </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon = {<div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>}
                  iconStyle={{ background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black font-medium font-base' style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} 
                      className='text-black font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA/>
    </section>
  )
}

export default About
