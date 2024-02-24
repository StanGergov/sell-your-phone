import { useState, useEffect } from 'react';

import * as phoneServices from '../../services/phoneService';
import PhoneList from '../Common/PhoneList/PhoneList';
import NoPhonesMessage from '../Common/NoPhonesMessage/NoPhonesMessage';
import Loadig from '../Common/Loading/Loading';

import demoPhones from '../Common/demoPhones';

const AllPhones = () => {

    const [phones, setPhones] = useState(demoPhones);
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
                if (Array.isArray(data)) {
                    setPhones([...phones, ...data]);
                }
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