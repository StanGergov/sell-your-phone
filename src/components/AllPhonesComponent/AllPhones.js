import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import './AllPhones.css';

import * as phoneServices from '../../services/phoneService';

const AllPhones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {

        phoneServices.getAll()
            .then(res => res.json())
            .then(data => {
                if(Array.isArray(data)){
                    setPhones(data)
                };
            })
            .catch(err => console.log(err))
    }, []);

    if (phones.message) {
        console.err(phones.message);
        return (
            <div className="page-title">No phones on list</div>
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

export default AllPhones;