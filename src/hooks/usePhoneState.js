import { useState, useEffect, useMemo } from 'react';

import * as phoneServices from '../services/phoneService'

import demoPhones from '../components/Common/demoPhones';

const usePhoneState = (phoneId) => {
    
    const [phone, setPhone] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        phoneServices.getOne(phoneId, controller.signal)
            .then(res => res.json())
            .then(phoneResult => {
                if (phoneResult.message) {
                    let searchPhone = demoPhones.filter(x => x._id === phoneId)
                    if (searchPhone) {
                        setPhone(searchPhone[0]);
                    } else {
                        throw new Error('This phone may not exist anymore.')
                    }
                } else {

                    setPhone(phoneResult);
                }
            })
            .catch(err => console.log(err))

        return () => {
            controller.abort();
        }
    }, [phoneId, controller]);

    return [
        phone,
        setPhone
    ]
};

export default usePhoneState;