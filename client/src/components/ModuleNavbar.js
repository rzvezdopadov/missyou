import React, {useContext, useEffect, useState} from 'react'
import logoNavBar from '../img/logoNavBar.png'
import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import {AuthContext} from '../context/authContext'
import {useHttp} from '../hooks/http.hook'

const GenFieldAuth = () => {

    const {loading, request, errors, clearError} = useHttp()
    const auth = useContext(AuthContext)

    const [form, setForm] = useState({
        email: 'rzvezdopadov@gmail.com', password: '12345678'
    })

    useEffect(() => {
        if (errors) {
            alert(errors)
        }
        clearError()
    },[errors])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/login','POST',{...form})
            if (data.token && data.userId) {
                auth.login(data.token, data.userId, data.userName)
            }
        } catch (e) {}
    }
    
    return (
        <Form className="d-flex">
            <div className="m-2">
                <span className="navbar-hello">Email:</span>
                <FormControl
                    type="email"
                    placeholder="example@example.ru"
                    className="form-control me-2"
                    aria-label="email"
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    disabled={loading}
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
                    name="password"
                    onChange={changeHandler}
                    disabled={loading}
                />
            </div>
            
            <Button 
                variant="success"
                onClick={loginHandler}
                disabled={loading}
            > Вход
            </Button>
        </Form>
    )
}

const GenFieldNoAuth = () => {
    const auth = useContext(AuthContext)

    return (
        <Form className="d-flex" variant="light">
            <Nav.Item className="text-light m-2">Добро пожаловать {auth.userName}!</Nav.Item>
            <Button 
                variant="success"
                onClick={auth.logout}
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
                
                {!auth.token ? <GenFieldAuth /> : <GenFieldNoAuth />}
                
            </Container>
        </Navbar>
    );
}


