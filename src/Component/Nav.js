import {Link} from "react-router-dom";

import { useState } from "react";
const Nav = () => {

    const [mobileIcon,setMobileIcon]=useState(false);
    window.addEventListener("resize", ()=>{
        if(window.innerWidth >813 && mobileIcon === true){
            setMobileIcon(false)
        }
        
    })
    return ( 
        <nav>
            <div className="nav-con">
                <div className="logo"><svg id="logo-37" width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5.74661 28.7259C7.28678 29.8002 9.78389 29.8002 11.3241 28.7259C12.8642 27.6516 12.8642 25.9098 11.3241 24.8355C9.78389 23.7612 7.28678 23.7612 5.74661 24.8355C4.20644 25.9098 4.20644 27.6516 5.74661 28.7259Z" class="ccustom" fill="#25CAAC"></path> <path d="M21.7322 14.1371C24.0425 15.7485 27.7881 15.7485 30.0984 14.1371C32.4086 12.5256 32.4086 9.91298 30.0984 8.30155C27.7881 6.69011 24.0425 6.69011 21.7322 8.30155C19.422 9.91298 19.422 12.5256 21.7322 14.1371Z" class="ccustom" fill="#25CAAC"></path> <path d="M13.2464 21.4315C15.1716 22.7743 18.293 22.7743 20.2182 21.4315C22.1434 20.0886 22.1434 17.9114 20.2182 16.5685C18.293 15.2257 15.1716 15.2257 13.2464 16.5685C11.3212 17.9114 11.3212 20.0886 13.2464 21.4315Z" class="ccustom" fill="#25CAAC"></path> <path d="M0.866345 20.4589C2.02147 21.2646 3.8943 21.2646 5.04943 20.4589C6.20455 19.6532 6.20455 18.3469 5.04943 17.5411C3.8943 16.7354 2.02147 16.7354 0.866345 17.5411C-0.288782 18.3469 -0.288781 19.6532 0.866345 20.4589Z" class="ccustom" fill="#25CAAC"></path> <path d="M13.2464 5.87008C15.1716 7.21294 18.293 7.21294 20.2182 5.87008C22.1434 4.52722 22.1434 2.35001 20.2182 1.00715C18.293 -0.335715 15.1716 -0.335716 13.2464 1.00715C11.3212 2.35001 11.3212 4.52722 13.2464 5.87008Z" class="ccustom" fill="#25CAAC"></path> <path d="M5.74661 13.1645C7.28678 14.2388 9.78389 14.2388 11.3241 13.1645C12.8642 12.0902 12.8642 10.3484 11.3241 9.27415C9.78389 8.19986 7.28678 8.19986 5.74661 9.27415C4.20644 10.3484 4.20645 12.0902 5.74661 13.1645Z" class="ccustom" fill="#25CAAC"></path> <path d="M13.2464 36.9929C15.1716 38.3357 18.293 38.3357 20.2182 36.9929C22.1434 35.65 22.1434 33.4728 20.2182 32.1299C18.293 30.7871 15.1716 30.7871 13.2464 32.1299C11.3212 33.4728 11.3212 35.65 13.2464 36.9929Z" class="ccustom" fill="#25CAAC"></path> <path d="M31.9011 21.9178C34.2114 23.5292 37.9571 23.5292 40.2673 21.9178C42.5776 20.3064 42.5776 17.6937 40.2673 16.0823C37.9571 14.4708 34.2114 14.4708 31.9011 16.0823C29.5909 17.6937 29.5909 20.3064 31.9011 21.9178Z" class="ccustom" fill="#25CAAC"></path> <path d="M21.7322 29.6984C24.0425 31.3099 27.7881 31.3099 30.0984 29.6984C32.4086 28.087 32.4086 25.4744 30.0984 23.8629C27.7881 22.2515 24.0425 22.2515 21.7322 23.8629C19.422 25.4744 19.422 28.087 21.7322 29.6984Z" class="ccustom" fill="#25CAAC"></path> </svg></div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Courses">Courses</Link></li>
            </ul>
            <div className="nav-btn">
                <button> <Link to="/Courses">Get Started</Link></button> 
            </div>
            <div className="mobile-menu-icon-con" onClick={()=>setMobileIcon(!mobileIcon)}>
                {mobileIcon? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
            </div>
            </div>
            
            { mobileIcon &&
                <div className="mobile-con" >
                    <ul onClick={()=>setMobileIcon(!mobileIcon)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Courses">Courses</Link></li>
                    </ul>
                </div>
            }
        </nav>
     );
}
 
export default Nav;