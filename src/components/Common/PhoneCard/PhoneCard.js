import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './PhoneCard.css';

const PhoneCard = ({phone}) => {
    return (
        <Link to={`/details/${phone._id}`} className="phone-card">
            <Card>
                <div className="image-container">
                    <Card.Img variant="top" src={phone.imgUrl} />
                </div>
                <Card.Body>
                    <Card.Title>{phone.brand} {phone.model}</Card.Title>
                    <Card.Text>Price: {phone.price}lv</Card.Text>
                </Card.Body>
            </Card>
        </Link >

    )
}

export default PhoneCard;