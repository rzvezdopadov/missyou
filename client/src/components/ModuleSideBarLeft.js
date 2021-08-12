import React from 'react'
import {Nav, Col, Image, Button, Dropdown} from 'react-bootstrap'
import {ourPartnersBlock} from './ourPartnersBlock'
import {verifiKey} from '../hooks/verifi.key'

import writeMessage from '../img/writeMessage.png'
import searchOnMap from '../img/searchOnMap.png'
import cartFriend from '../img/cartFriend.png'
import settingUser from '../img/settingUser.png'


const genBtnImage = (size,src,callback) => {
    return (
        <Nav.Item as="li" >
            <Button 
                variant="success" 
                className="p-1 m-2 mb-2"
                onClick={callback}
            >
                <Image src={src}
                    width={size}
                    height={size}
                    roundedCircle 
                />
            </Button>
        </Nav.Item>
    )
}

const genBtnNavi = () => {
    const imageSize  = "50"

    if (verifiKey()) {
        return (
            <Nav className="d-lg-block bg-dark justify-content-center col-height mb-2" as="ul">
                {genBtnImage(imageSize,writeMessage)}                
                {genBtnImage(imageSize,searchOnMap)} 
                {genBtnImage(imageSize,cartFriend)} 
                {genBtnImage(imageSize,settingUser)} 
            </Nav>
        )
    }
}

export const ModuleSideBarLeft = () => {
    const href  = "https://ad.admitad.com/g/1ekxctpcqv1a0445aa42b62ed2b196/?i=4"
    const image = "https://ad.admitad.com/b/1ekxctpcqv1a0445aa42b62ed2b196/"

    return (
        <Col lg={2} className="p-1 col-height">
            {genBtnNavi()}
            
            <Nav className="d-lg-block bg-dark text-light justify-content-center" as="ul">
                <div className="d-flex flex-column">
                    <div className="">
                        <Nav.Item as="li">
                            Наши партнеры:
                        </Nav.Item>
                    </div>
                    <div className="d-flex justify-content-around flex-wrap"> 
                        {ourPartnersBlock(100,image,href,"Всё по 38! FistingPrice!",1)}
                        {ourPartnersBlock(100,image,href,"Наборы для жарки за так!",1)}
                        {ourPartnersBlock(100,image,href,"Плюшевые игрушки из Китая",1)}
                    </div>   
                </div>
            </Nav>
        </Col >
    );
}

