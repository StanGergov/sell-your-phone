import { Row, Col, Card } from 'react-bootstrap';
import './AllPhones.css';

const AllPhones = () => {

    const phones = [
        {
            model: 'Samsung Galaxy Note 10 plus',
            imgUrl: 'https://m.media-amazon.com/images/I/51RauKMrouL._AC_SX522_.jpg',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: 800,
        },
        {
            model: 'Apple iPhone 13 pro Max',
            imgUrl: 'https://istyle.bg/media/catalog/product/i/p/iphone_13_pro_max_graphite_pdp_image_position-1a__wwen_5_1.jpg',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: 2300,
        },
        {
            model: 'Samsung Galaxy Z Fold 3',
            imgUrl: 'https://images.samsung.com/is/image/samsung/p6pim/it/2108/gallery/it-galaxy-z-fold3-f926-5g-sm-f926bzgdeue-thumb-478053760',
            description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
            price: 2600,
        },
    ];

    return (
        <Row xs={1} md={2} className="g-4">
            {phones.map((phone) => (
                <Col>
                    <Card>
                        <div className='img'>
                            <Card.Img variant="top" src={phone.imgUrl} />
                        </div>
                        <Card.Body>
                            <Card.Title>{phone.model}</Card.Title>
                            <Card.Text>Price: {phone.price}lv</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default AllPhones;