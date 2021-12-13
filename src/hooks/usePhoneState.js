import { useState, useEffect, useMemo } from 'react';

import * as phoneServices from '../services/phoneService'

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
                setPhone(phoneResult);
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