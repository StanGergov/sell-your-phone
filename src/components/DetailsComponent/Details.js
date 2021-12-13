import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './Details.css';

import * as phoneServices from '../../services/phoneService';


const Details = () => {

    const {phoneId} = useParams()

    let [phone, setPhone] = useState([]);

    useEffect(() => {
        phoneServices.getOne(phoneId)
            .then(res => res.json())
            .then(data => {
                setPhone(data);
            })
    }, [phoneId]);

    return (
        <div>
            <div className="page-title">{phone.brand} {phone.model}</div>
            <div className="page-content">
                <img src={phone.imgUrl} className="image" alt="img" />
                <div className="phone-details">

                    <h3>Price:</h3>
                    <h2>{phone.price} lv</h2>

                    <h4>Color</h4>
                    <h5>{phone.color}</h5>

                    <h4>Grade of conditions</h4>
                    <h5>{phone.grade}</h5>

                    <h4>Accessories</h4>
                    {
                        phone.accessories
                            ? <h5>{phone.accessories}</h5>
                            : <h5>No accessories for this phone</h5>

                    }

                    {
                        phone.notes
                            ? <> <h4>Notes</h4>
                                <h5>{phone.notes}</h5></>
                            : null
                    }
                    <div>

                        <Button as={Link} to={`/edit/${phoneId}`} variant="primary">Edit</Button>
                        <Button as={Link} to={`/delete/${phoneId}`} variant="danger">Delete</Button>
                    </div>
                </div>
            </div>
            {/* <table>
                <th>
                    <img src={phone.imgUrl} className="image" alt="img" />
                </th>
            </table> */}

        </div>

    );
}

export default Details