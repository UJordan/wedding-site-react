import { Container, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavDropdown, NavLink } from 'reactstrap';

const Header = () => {

    return (
        <Navbar className='navbar navbar-expand-sm navbar-light bg-light sticky-top'>
            <NavbarBrand>
                <h4 className='mt-2'> CASSIDY & JORDAN </h4>
            </NavbarBrand>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink>
                        <i />HOME
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <i />INFO
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <i />RESERVATION
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <i />CONTACT
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        
    );
}

export default Header;