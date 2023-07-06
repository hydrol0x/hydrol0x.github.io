// @ts-nocheck
import React from 'react'
import './css/footer.css'

const FooterBar = () => {
  return (
    <div className='footerbar_wrapper'>
        <ul className="footerbar">
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jacob-ryabinky-ba573626b"><img src='src\assets\LI-In-Bug.png' height={25} width={25}/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/hydrol0x"><img src='src\assets\github-mark-white.png' height={25} width={25}/></a></li>
        </ul>
    </div>
  )
}

export default FooterBar