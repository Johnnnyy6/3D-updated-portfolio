import { projects } from "../constants";
import { Link } from "react-router-dom"
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";


const Project = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Over the past few years, I’ve had the opportunity to create several projects, each of which has deepened my passion for software development. Every project holds a special significance for me, as they reflect not only my growing technical 
          skills but also the different stages of my personal and professional journey. 
          I invite you to explore them and discover the stories and innovations behind each one!
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                src={project.iconUrl}
                className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link to = {project.link}
                target = "_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                src={arrow}
                className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200"/>
      <CTA/>
      </section>
  )
}

export default Project
