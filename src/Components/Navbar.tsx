import './css/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar_wrapper'>
        {/* <!-- HTML for the navbar -->  */}
        <ul className="navbar">
            <li><a href="#contact">Contact</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">About</a></li>
            <li className='logo'><a href="#home">JR</a></li>
        </ul>
    </div>
  )
}

export default Navbar


