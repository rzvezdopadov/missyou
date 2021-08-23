import React, {useContext} from 'react'
import {Nav, Col} from 'react-bootstrap'
import {FormRegistration} from './FormRegistration'
import {AuthContext} from '../context/authContext'

export const ModuleNavCenter = () => {
    const auth = useContext(AuthContext)

    return (
        <Col lg={7} className="p-1">
            <Nav className="d-lg-block bg-dark text-light">
                {!auth.token && <FormRegistration />}                 
            </Nav>         
        </Col>
    );
}

