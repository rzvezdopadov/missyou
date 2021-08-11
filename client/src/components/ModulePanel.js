import React from 'react'
import {Container, Nav, Row, Col, Button} from 'react-bootstrap'
import { ModuleNavCenter } from './ModuleNavCenter'
import { ModuleSideBarLeft } from './ModuleSideBarLeft'
import { ModuleSideBarRight } from './ModuleSideBarRight'

export const ModulePanel = () => {
    return (
        <Container className="mt-1">
            <Row className="">
                <ModuleSideBarLeft />
                <ModuleNavCenter />
                <ModuleSideBarRight />
            </Row>
        </Container>
    );
}

