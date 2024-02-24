import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';
import PhoneList from '../Common/PhoneList/PhoneList';
import NoPhonesMessage from '../Common/NoPhonesMessage/NoPhonesMessage';
import Loadig from '../Common/Loading/Loading';

import demoPhones from '../Common/demoPhones';

const Myphones = () => {

    const { user } = useAuthContext();
    let myDemoPhones = demoPhones.filter(x => x._ownerId === user._id);

    const [phones, setPhones] = useState(myDemoPhones);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        phoneServices.getMyPhones(user._id)
        .then(res => res.json())
        .then(data => {
                if (Array.isArray(data)) {
                    setPhones([...phones, ...data]);
                }
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