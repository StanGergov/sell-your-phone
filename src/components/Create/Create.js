import { useNavigate } from 'react-router';

import './Create.css';

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';
import { useNotificationContext, types } from '../../contexts/notificationContext';
import PhoneForm from '../Common/PhoneForm/PhoneForm';

const Create = () => {
    const { user } = useAuthContext();
    const { showNotification } = useNotificationContext();
    const navigate = useNavigate();

    const createNewAd = (formData) => {
        const ownerName = user.name;
        const ownerPhoneNumber = user.phoneNumber;
        const ownerEmail = user.email;

        const phoneData = { ...formData, ownerName, ownerPhoneNumber, ownerEmail };

        phoneServices.create(phoneData, user.accessToken)
            .then((res) => res.json())
            .then(data => {
                navigate(`/details/${data._id}`);
                showNotification('You successfully create an ad for your phone', types.success);
            })
            .catch(err => console.error(err))

    };

    return (
        <>
            <h1 className="page-title">Create an ad for your phone</h1>
            <PhoneForm submit={createNewAd} />
        </>
    );
};

export default Create;