import React from 'react'
import logoNavBar from '../img/logoNavBar.png'
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {postData} from '../hooks/http.hook'

const PushButtonEntry = () => {
    const phone = document.getElementById("phoneNumber").value
    const pwd = document.getElementById("pwd").value
    const answer = postData("/login",`{phone:'${phone}',pwd:'${pwd}'}`)
    console.log("answer",answer)
}

export const ModuleNavbar = () => {
    const imageWidth  = "30"
    const imageHeight = "30"

    return (
        <Navbar className="ms-1 me-1" fixed="" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="justify-content-center">
                <Navbar.Brand color="light" href="/">
                    <img 
                        src={logoNavBar} 
                        width={imageWidth} 
                        height={imageHeight}
                        className="d-inline-block align-top" 
                        alt=""
                    ></img>
                    &nbsp;MISS-YOU.RU
                </Navbar.Brand>
                <Navbar.Toggle className="mb-2" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">О нас</Nav.Link>
                        <Nav.Link href="/">Поддержка</Nav.Link>
                        <Nav.Link href="/">Партнерство</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                    <FormControl
                        type="phoneNumber"
                        placeholder="+71234567890"
                        className="form-control me-2"
                        aria-label="phoneNumber"
                        id="phoneNumber"
                    />
                    <FormControl
                        type="password"
                        placeholder="********"
                        className="form-control me-2"
                        aria-label="password"
                        id="pwd"
                    />
                    <Button 
                        variant="success"
                        onClick={PushButtonEntry}
                    > Вход
                    </Button>
                </Form>
            </Container>
        </Navbar>
    );
}


