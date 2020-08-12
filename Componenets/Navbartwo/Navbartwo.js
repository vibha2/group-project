import React,{ useState } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import  './Navbartwo.css';
import Dropdown from './Dropdown.js';
import DropdownTwo from './DropdownTwo.js';
import DropdownThree from './DropdownThree.js';



function Navbartwo(){

    const [click,setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);

   

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
   

    


return (
<>
<nav className="navbarsecond">



    <div className="mainlogo">
    <i class="fas fa-graduation-cap">
    <Link to='/Educenter' className='navbarsecond-logo'><span className="edu"> Edu</span><span className="center">Center</span></Link></i>
    </div>

    
    
    <div className="menus" >
    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
        <li className='nav-item activee'>
           <Link to='/' className='nav-linkstwo active' onClick={closeMobileMenu}  >Home</Link>
        </li>
        <li className='nav-item'>
           <Link to='/AboutUS' className='nav-linkstwo' onClick={closeMobileMenu} >About Us</Link>
        </li>
        <li className='nav-item' onClick={() => setOpen(!open)}>
           <Link to='/' className='nav-linkstwo' onClick={closeMobileMenu} >Services <i className='fas fa-caret-down' /></Link>
           
           {open && <Dropdown/>}
           
        </li>
        <li className='nav-item' onClick={() => setOpen1(!open1)}>
           <Link to='/' className='nav-linkstwo' onClick={closeMobileMenu} >Pages <i className='fas fa-caret-down' /></Link>
           
           {open1 && <DropdownTwo/>}
           
        </li>
        <li className='nav-item' onClick={() => setOpen2(!open2)}>
           <Link to='/' className='nav-linkstwo' onClick={closeMobileMenu} >Blog <i className='fas fa-caret-down' /></Link>
           
           { open2 && <DropdownThree/>}
           
        </li>
        <li className='nav-item'>
           <Link to='/ContactUS' className='nav-linkstwo' onClick={closeMobileMenu} >Contact Us</Link>
        </li>
        

    </ul>
    </div>

    <div className="qt-btn">
    <Button />
    </div>

    <div className='menu-icon' onClick={handleClick}>
    <i className = {click? 'fas fa-bars' : 'fas fa-times'}  />
    </div>
    
    


    
    
    
    
    
    

</nav>
</>


);


}
export default Navbartwo;



