import { kontakt, skills } from "../constants"

const Contact = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        I'll answer as quick as i can
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Really I swear
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Contant Info</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {kontakt.map((kon) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"/>
              <div className="btn-front rounded-xl flex justify-center items-center">
              <a href={kon.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={kon.imageUrl}
                  alt={kon.name}
                  className="w-1/2 h-1/2 object-contain"
                />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact