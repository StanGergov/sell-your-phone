import { useNavigate, useParams } from 'react-router';

import '../Create/Create.css'

import * as phoneServices from '../../services/phoneService';
import * as authServices from '../../services/authService'
import { useAuthContext } from '../../contexts/authContext';
import { useNotificationContext, types } from '../../contexts/notificationContext';
import usePhoneState from '../../hooks/usePhoneState';
import PhoneForm from '../Common/PhoneForm/PhoneForm';
import SpinnerOverlay from '../Common/SpinnerOverlay/SpinnerOverlay';

import demoPhones from '../Common/demoPhones';


const Edit = () => {

    const { phoneId } = useParams()
    const [phone, setPhone] = usePhoneState(phoneId);
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const { showNotification } = useNotificationContext();
    const isOwner = authServices.isOwner(phone.ownerId, user._id);

    const updatePhone = (phoneData) => {
        phoneServices.update(phoneId, phoneData, user.accessToken)
            .then(res => res.json())
            .then(data => {

                if (data.message) {
                    let searchPhone = demoPhones.filter(x => x._id === phoneId);
                    if (searchPhone) {
                        demoPhones[phoneId] = phoneData;
                        let updatedPhone = demoPhones[phoneId]
                        setPhone(updatedPhone);
                    } else {
                        throw new Error('This phone may not exist anymore.');
                    }
                    
                } else {
                    
                    setPhone(data);
                }
                
                navigate(`/details/${phoneId}`);
            })
            .catch(err => {

                let searchPhone = demoPhones.filter(x => x._id === phoneId)
                if (searchPhone) {
                    setPhone(searchPhone[0]);
                } else {
                    console.log(err)
                }
            });

        }

        
    if (Object.keys(phone).length === 0) {
        return <SpinnerOverlay />
    }

    if (!isOwner) {
        showNotification('You are not the owner of this ad.', types.warn);
        navigate('/all-phones');
    }

    return (
        <>
            <h1 className="page-title">Edit the ad for your phone</h1>
            <PhoneForm submit={updatePhone} phone={phone} />
        </>
    );
};

export default Edit;