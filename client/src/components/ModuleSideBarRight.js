import React from 'react'
import {Nav, Col} from 'react-bootstrap'
import {ourPartnersBlock} from './ourPartnersBlock'

export const ModuleSideBarRight = () => {
    const href  = "https://ad.admitad.com/g/1ekxctpcqv1a0445aa42b62ed2b196/?i=4"
    const image = "https://ad.admitad.com/b/1ekxctpcqv1a0445aa42b62ed2b196/"

    return (
        <Col lg={3} className="p-1">
            <Nav className="d-lg-block bg-dark text-light justify-content-center" as="ul">
                <div className="d-flex flex-column">
                    <div className="">
                        <Nav.Item as="li">
                            Наши партнеры:
                        </Nav.Item>
                    </div>
                    <div className="d-flex justify-content-around flex-wrap"> 
                        {ourPartnersBlock(200,image,href,"Самые дешевые стиральные машинки",1)}
                        {ourPartnersBlock(200,image,href,"Унитазы почти даром!",1)}
                        {ourPartnersBlock(200,image,href,"Тостеры и родстеры по дешману",2)}
                        {ourPartnersBlock(200,image,href,"Надувные куклы из Китая",2)}
                    </div>   
                </div>
            </Nav>
        </Col>
                  
    );
}

