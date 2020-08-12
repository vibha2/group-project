import React,{Component} from 'react';
import {MenuItems} from "./MenuItems.js";
import  "./Navbar.css";

class Navbar extends Component
{
render(){

return(
<nav className="NavbarItem">
<ul className="navbar-ul">
{MenuItems.map((item,index)=>{
return (
<li key={index} className="navbar-li"> 
<a 
className={item.cName}
href ={item.url}>{item.title}</a></li>
);
})
}
</ul>
<ul className="navbar-logo">
<li className="navbar-logo1"><i class="fas fa-phone" >  </i> +010 123456789</li>
<li className="navbar-logo2"><i class="fas fa-envelope">  </i> support@yourmail.com</li>
</ul>

</nav>

);

}

}

export default Navbar;

