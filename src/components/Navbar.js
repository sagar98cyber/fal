import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    //const [click,setClick] = useState(false);

    //const handleClick = () => setClick(!click)

    return (
        <>
          <nav className="navbar">    
                    <Link to='/' className = 'navbar-logo'>
                        VoLo
                    </Link>
                    <Link to ='/info'>
                        <div className = 'menu-icon'  >{/*onClick={handleClick}*/}
                            <i class = 'fas fa-info-circle' />
                            {/* <i class={ click ? "fas fa-info-circle":"fas fa-bars"}></i>*/}
                        
                        </div>
                    </Link> 
            </nav>  
        </>
    )
}

export default Navbar
