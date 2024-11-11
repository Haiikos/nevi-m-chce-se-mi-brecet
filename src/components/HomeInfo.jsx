import React from 'react'
import { Link } from 'react-router-dom'



const InfoBox = ({text,link,btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-x1 text-center"> {text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
        </Link>
    </div>
)
const rendererContent = {
    1:(
        <h1 className='sm:text-x1 sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hello, I am <span className='font-semibold'>Lukas</span>
        <br/>
        IT Student at SPST and a gamer
        </h1>
    ),
    2:(
        <InfoBox 
            text="I Worked on a few projects but learnt a lot"
            link="/About"
            btnText="Learn more"
        />
    ),
    3:(
        <InfoBox 
            text="Made two whole games and curently working on a website"
            link="/Projects"
            btnText="Visit my projects"
        />
    ),
    4:(
        <InfoBox 
        text="Need a help with a project?"
        link="/Contact"
        btnText="Hit me up"
    />
    ),
}

const HomeInfo = ({currentStage}) => {
  return rendererContent[currentStage] || null;
}

export default HomeInfo