import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import './MyPhones.css';

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';
import PhoneList from '../Common/PhoneList/PhoneList';
import NoPhonesMessage from '../Common/NoPhonesMessage/NoPhonesMessage';



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
            <NoPhonesMessage>
                <Button as={Link} to="/create" className="create-btn" variant="primary">Create an ad</Button>
            </NoPhonesMessage>
        );
    } else {
        return (
            <PhoneList phones={phones}/>
        );
    }
};

export default Myphones;