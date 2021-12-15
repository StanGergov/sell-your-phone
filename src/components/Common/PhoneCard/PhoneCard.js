import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';

const PhoneCard = ({phones}) => {
    return (
        <Row xs={1} md={2} className="g-4">
            {phones.map((phone) => (
                <Col key={phone._id}>
                    <Link to={`/details/${phone._id}`} className="phone-card">
                        <Card>
                            <div className='img'>
                                <Card.Img variant="top" src={phone.imgUrl} />
                            </div>
                            <Card.Body>
                                <Card.Title>{phone.brand} {phone.model}</Card.Title>
                                <Card.Text>Price: {phone.price}lv</Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
};

export default PhoneCard;