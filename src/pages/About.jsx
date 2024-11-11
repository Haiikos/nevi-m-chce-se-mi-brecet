import { skills } from "../constants"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        hello, I'm <span className="green-gradient_text font-semibold drop-shadow">
        Lukas
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          And I'm IT student at SPST, and specialize in playing league and doomscrolling 
        </p>

        
      </div>

      <div className="text-slate-500">
        <p>
          You can hit me up at <Link to="/Contact" className="text-black-500 font-bold">CONTACTS</Link>
        </p>
      </div>


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About