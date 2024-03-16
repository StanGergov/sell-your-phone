import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';
import PhoneList from '../Common/PhoneList/PhoneList';
import NoPhonesMessage from '../Common/NoPhonesMessage/NoPhonesMessage';
import Loadig from '../Common/Loading/Loading';

import '../MyPhones/MyPhones.css'

const Myphones = () => {

    const { user } = useAuthContext();

    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        
        phoneServices.getAll()
        .then(res => res.json())
        .then(data => {
            
            let phonesWithId = [];

            Object.entries(data).forEach(x => phonesWithId.push({_id: x[0], ...x[1]}));

            let myPhones = Object.values(phonesWithId).filter(x => x.ownerId === user._id);
            
            setPhones(myPhones);
        
            })
            .catch(err => console.log(err));
    
    }, [user._id]);

    if (phones.length <= 0) {
        return (
            loading
                ? <Loadig />
                : <NoPhonesMessage>
                    <Button as={Link} to="/create" className="create-btn" variant="primary">Create an ad</Button>
                </NoPhonesMessage>
        );
    } else {
        return (
            <PhoneList phones={phones} />
        );
    }
};

export default Myphones;