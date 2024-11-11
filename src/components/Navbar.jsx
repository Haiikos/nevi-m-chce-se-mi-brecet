import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center 
        justify-center flex font-bold shadow-md">
            <p className="green-gradient_text">LH</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/About" className={({ isActive }) => isActive ?
            'text-green-500' : 'text-black-500'}>
                About
            </NavLink>
            <NavLink to="/Projects" className={({ isActive }) => isActive ?
            'text-green-500' : 'text-black-500'}>
                Projects
            </NavLink>
            <NavLink to="/Examples" className={({ isActive }) => isActive ?
            'text-green-500' : 'text-black-500'}>
                Examples
            </NavLink>
        </nav>

    </header>
  )
}

export default Navbar