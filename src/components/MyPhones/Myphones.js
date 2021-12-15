import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './MyPhones.css';

import PhoneCard from '../Common/PhoneCard/PhoneCard';
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
            <PhoneCard phones={phones}/>
        );
    }
};

export default Myphones;