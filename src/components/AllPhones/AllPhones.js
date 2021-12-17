import { useState, useEffect } from 'react';
import './AllPhones.css';
import * as phoneServices from '../../services/phoneService';
import PhoneList from '../Common/PhoneList/PhoneList';
import NoPhonesMessage from '../Common/NoPhonesMessage/NoPhonesMessage';

const AllPhones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        phoneServices.getAll()
            .then(res => res.json())
            .then(data => {
                if(Array.isArray(data)){
                    setPhones(data)
                }
            })
            .catch(err => console.log(err))
    }, []);

    if (phones.length === 0) {
        return (
            <NoPhonesMessage />
        );
    } else {
        return (
            <PhoneList phones={phones}/>
        );
    }
};

export default AllPhones;