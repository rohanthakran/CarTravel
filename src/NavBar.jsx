import React , {useState}from 'react'
import  {MenuItems} from './MenuItems'

import "./Nav.css"
const NavBar =() =>{
    const [clicked , setClick] = useState(false);
    const Open =() =>{
        const icon = document.querySelector(".fa-bars");
        const navLinks = document.querySelector(".nav-links")
    
       icon.addEventListener('click' ,() => {
           navLinks.classList.toggle("open");
           
       })
    }
 return (
    <React.Fragment>
    <div className="container">
        <nav className ="NavBarItems">
        <span>JC</span>
        <i className="fas fa-bars" onClick={Open}></i>
                <ul className= 'nav-links'>
               
                    {MenuItems.map((items,index) =>{
                        return (
                            <li><a  href={items.url}>{items.title}</a></li>
                        )
                    })}
                   
                </ul>
               


            
        </nav>
        </div>
     </React.Fragment>
     
 
 )
}
export default NavBar