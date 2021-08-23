import {Nav, Image} from 'react-bootstrap'

export const ourPartnersBlock = (sizeImage,image,href,about,divHeight = 1) => {
    return (
        <Nav.Item as="li"
            className="m-2 navitem-partners"
        >
            <a 
                href={href}
                target="_blank"
                className="content"
                rel="noopener noreferrer"
            >
                <Image
                    src={image}
                    width={sizeImage}
                    height={(sizeImage/divHeight)} 
                />
                <div className="p-0 m-0">{about}</div>   
            </a>
        </Nav.Item>
    )
}
