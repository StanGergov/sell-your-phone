import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './MyPhones.css';

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';


const Myphones = () => {

    const {user} = useAuthContext();

    const [phones, setPhones] = useState([]);

    useEffect(() => {

        phoneServices.getMyPhones(user._id)
            .then(res => res.json())
            .then(data => {
                if(Array.isArray(data)){
                    setPhones(data)
                }
            })
            .catch(err => console.log(err))
    }, [user._id]);


    if (phones.length <= 0) {
        return (
            <div className="no-phones">
                <div className="page-title">No phones on list</div>
                <Button as={Link} to="/create" className="create-btn" variant="primary">Create an ad</Button>
            </div>
        );
    } else {

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
                                    <Card.Title>{phone.model}</Card.Title>
                                    <Card.Text>Price: {phone.price}lv</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        );
    }
};

export default Myphones;