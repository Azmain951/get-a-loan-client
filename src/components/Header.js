import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import logo from '../images/logo.png'
import Loading from './Loading';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        <Loading></Loading>
    }

    const handleSignout = () => {
        signOut(auth);
        toast.success('Sign out successfully!')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'><img src={logo} alt="" width={36} /> GET A LOAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/loan-apply'>Apply for Loan</Nav.Link>
                        <Nav.Link as={Link} to='/applications'>Loan Applications</Nav.Link>
                        {user ?
                            <button onClick={handleSignout} className='btn btn-link'>Signout</button>
                            : <Nav.Link as={Link} to='/login'>Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;