import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/kisspng-chanel-coco-mademoiselle-perfume-drawing-illustrat-perfume-5aa1001bc36d71.1287567915205007638005.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='d-flex justify-content-center bg-pink'>
            <Navbar collapseOnSelect expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className='d-flex justify-content-center align-items-center'>
                            <img height={50} src={logo} alt="" />
                            <h4 className='ms-2'>Perfume Elegance</h4>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className='me-auto'>
                            <Nav.Link href="home#inventory" className='text-white'>Inventory</Nav.Link>

                            <Nav.Link as={Link} to="blogs" className='text-white'>Blogs</Nav.Link>
                            {
                                user && <>

                                    <Nav.Link className='text-white' as={Link} to="manage">Manage Inventory</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to="add">Add Inventory</Nav.Link>

                                </>
                            }


                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link className='text-white' as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;