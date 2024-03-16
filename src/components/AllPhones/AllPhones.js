import { useState, useEffect } from 'react';

import * as phoneServices from '../../services/phoneService';
import PhoneList from '../Common/PhoneList/PhoneList';
import NoPhonesMessage from '../Common/NoPhonesMessage/NoPhonesMessage';
import Loadig from '../Common/Loading/Loading';


const AllPhones = () => {

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
                
                let allPhones = [];

                Object.entries(data).forEach(x => allPhones.push({_id: x[0], ...x[1]}));
                
                setPhones(allPhones);
            })
            .catch(err => console.log(err));

    }, []);



    if (phones.length === 0) {
        return (
            loading
                ? <Loadig />
                : <NoPhonesMessage />
        );
    } else {

        return (
            <PhoneList phones={phones} />
        );
    }

};

export default AllPhones;