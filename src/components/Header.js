import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='navbar navbar-expand-sm navbar-light bg-light sticky-top'>
            <NavbarBrand>
                <NavLink className='nav-link' to='/'>
                    <h4 className='mt-2 ms-2 title'><strong> CASSIDY & JORDAN </strong></h4>
                </NavLink>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link active' to='/'>
                            <li>HOME</li>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/info'>
                            <li>INFO</li>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/reservation'>
                            <li>RESERVATION</li>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <li>CONTACT</li>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>  
    );
}

export default Header;