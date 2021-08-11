import React from 'react'
import {Nav, Col, Image, Button} from 'react-bootstrap'
import logoNavBar from '../img/logoNavBar.png'
import writeMessage from '../img/writeMessage.png'
import searchOnMap from '../img/searchOnMap.png'
import cartFriend from '../img/cartFriend.png'
import settingUser from '../img/settingUser.png'

const btnImageGen = (size,src,callback) => {
    return (
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
    )
}

export const ModuleSideBarLeft = () => {
    const imageSize  = "50"

    return (
        <Col lg={2} className="p-1 col-height">
            <Nav className="d-lg-block bg-dark justify-content-center col-height" as="ul">
                <Nav.Item as="li" >
                    {btnImageGen(50,writeMessage)}                
                </Nav.Item>
                <Nav.Item as="li">
                    {btnImageGen(imageSize,searchOnMap)} 
                </Nav.Item>
                <Nav.Item as="li">
                    {btnImageGen(imageSize,cartFriend)} 
                </Nav.Item>
                <Nav.Item as="li">
                    {btnImageGen(imageSize,settingUser)} 
                </Nav.Item> 
            </Nav>
        </Col >
    );
}

