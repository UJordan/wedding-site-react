import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='navbar navbar-expand-sm navbar-light bg-light sticky-top'>
            <NavbarBrand>
                <h4 className='mt-2 ms-2'> CASSIDY & JORDAN </h4>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i />HOME
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/info'>
                            <i />INFO
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/reservation'>
                            <i />RESERVATION
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i />CONTACT
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
    );
}

export default Header;