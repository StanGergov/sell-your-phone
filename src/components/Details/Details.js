import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import './Details.css';

import ConfirmDialog from '../Common/ConfirmDialog/ConfirmDialog'
import * as phoneServices from '../../services/phoneService';
import * as authServices from '../../services/authService'
import { useAuthContext } from '../../contexts/authContext';
import { useNotificationContext, types } from '../../contexts/notificationContext';


const Details = () => {

    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { phoneId } = useParams();
    const { showNotification } = useNotificationContext();
    const [phone, setPhone] = useState([]);

    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    const isOwner = authServices.isOwner(phone._ownerId, user._id);

    useEffect(() => {
        phoneServices.getOne(phoneId)
            .then(res => res.json())
            .then(data => {

                if (data.message) {
                    throw new Error('This phone may not exist anymore.')
                }
                setPhone(data);
            })
            .catch(err => {
                console.error(err);
                showNotification('This phone may not exist anymore.', types.warn)
                navigate('/allphones');
            })
    }, [phoneId, showNotification, navigate]);

    const deleteHandler = (e) => {
        e.preventDefault();

        phoneServices.deletePhone(phoneId, user.accessToken)
            .then(() => {
                navigate('/myphones');
                showNotification('You successfully delete this phone.', types.success);
            })
            .catch(err => console.error(err))
            .finally(() => {
                setShowDeleteDialog(false)
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }

    const ownerButtons = <>
        <Button as={Link} to={`/edit/${phoneId}`} variant="primary">Edit</Button>
        <Button onClick={deleteClickHandler} variant="danger">Delete</Button>
    </>


    const notOwnerView = <>
        <h4>You like this phone?</h4>
        <h5>Owner Contacts:</h5>
        <h5>Name: {phone.ownerName}</h5>
        <h5>Phone: {phone.ownerPhoneNumber}, email: {phone.ownerEmail}</h5>
    </>

    return (
        <>
            <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />
            <div>
                <div className="page-content">
                    <img src={phone.imgUrl} className="image" alt="img" />
                    <div className="phone-details">
                        <div className="page-title">{phone.brand} {phone.model}</div>

                        <h3>Price: {phone.price} leva</h3>

                        <h4>Color: {phone.color}</h4>

                        <h4>Grade of conditions: {phone.grade}</h4>

                        <h4>Accessories:</h4>

                        {
                            phone.accessories
                                ? <h5>{phone.accessories}</h5>
                                : <h5>No accessories for this phone</h5>

                        }

                        {
                            phone.notes
                                ? <> <h4>Notes</h4>
                                    <h5>{phone.notes}</h5></>
                                : null
                        }
                        <div className='owner-buttons'>
                            {
                                isOwner
                                    ? ownerButtons
                                    : notOwnerView
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Details