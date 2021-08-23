import React, {useContext} from 'react'
import logoNavBar from '../img/logoNavBar.png'
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {AuthContext} from '../context/authContext'



const genFieldAuth = () => {


    const pushButtonEntry = () => {

    }
    

    return (
        <Form className="d-flex">
            <div className="m-2">
                <span className="navbar-hello">Email:</span>
                <FormControl
                    type="eMail"
                    placeholder="example@example.ru"
                    className="form-control me-2"
                    aria-label="eMail"
                    id="eMail"
                />
            </div>
            
            <div className="m-2">
                <span className="navbar-hello">Пароль:</span>
                <FormControl
                    type="password"
                    placeholder="********"
                    className="form-control me-2"
                    aria-label="password"
                    id="pwd"
                />
            </div>
            
            <Button 
                variant="success"
                onClick={pushButtonEntry}
            > Вход
            </Button>
        </Form>
    )
}

const genFieldNoAuth = () => {
    return (
        <Form className="d-flex" variant="light">
            <Nav.Item className="text-light m-2">Добро пожаловать Ева!</Nav.Item>
            <Button 
                variant="success"
            > Выход
            </Button>
        </Form>
    )
}

export const ModuleNavbar = () => {
    const imageWidth  = "30"
    const imageHeight = "30"
    const auth = useContext(AuthContext)

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
                
                {!auth.token ? genFieldAuth() : genFieldNoAuth()}
                
            </Container>
        </Navbar>
    );
}


