import React, { useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import ModalView from './ModalView'

function NavBar() {
    const [visible,setVisible] = useState(false)
    const toggleVisible =(display)=>{
        setVisible(display) ;
    }
    return (
        <>
            <ModalView visible={visible} toggleVisible={toggleVisible}/>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Course</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                </Nav>
                <Button onClick={()=>setVisible(true)}>
                     Calculate
                </Button>
                
            </Navbar>
        </>
    )
}

export default NavBar
