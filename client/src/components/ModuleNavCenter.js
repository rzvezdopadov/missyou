import React from 'react'
import {Nav, Col} from 'react-bootstrap'
import {FormRegistration} from './FormRegistration'
import {verifiKey} from '../hooks/verifi.key'


const genNavCenter = () => {
    if (!verifiKey()) {
        return (
            <FormRegistration regEnable="true"/>  
        )
    }
}

export const ModuleNavCenter = () => {
    return (
        <Col lg={7} className="p-1">
            <Nav className="d-lg-block bg-dark text-light">
                {genNavCenter()}                 
            </Nav>         
        </Col>
    );
}

