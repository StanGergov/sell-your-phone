import { useState, useEffect } from 'react';

import './AllPhones.css';

import PhoneCard from '../Common/PhoneCard/PhoneCard';
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
            <PhoneCard phones={phones}/>
        );
    }
};

export default AllPhones;