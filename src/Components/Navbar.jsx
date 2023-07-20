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
            <li className='logo'><a href="#home"><img className="logo" height={30} width={30} src='https://github.com/hydrol0x/hydrol0x.github.io/assets/34951139/9b2df076-e340-4923-b64a-7365007bf688'/></a></li>
        </ul>
    </div>
  )
}

export default Navbar


