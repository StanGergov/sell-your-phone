import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Form, Button } from 'react-bootstrap';

import '../CreateComponent/Create.css'

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';
import usePhoneState from '../../hooks/usePhoneState';


const Edit = () => {


    const { phoneId } = useParams()
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const [phone, setPhone] = usePhoneState(phoneId);

    const updateAd = (e) => {
        e.preventDefault();

        let phoneData = Object.fromEntries(new FormData(e.currentTarget));

        phoneServices.update(phoneId, phoneData, user.accessToken)
            .then(res => res.json())
            .then(phone => {
                setPhone(phone);
                navigate(`/details/${phone._id}`)
            })
            .catch(err => console.log(err));
    }


    const [myValue, setMyValue] = useState('');
    const changeHandler = (e) => {
        setMyValue(phone.grade);
    };



    return (
        <>
            <h1 className="page-title">Edit the ad for your phone</h1>
            <Form className="ad-form" method="POST" onSubmit={updateAd}>
                <Form.Group className="mb-3" >
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" name="brand" placeholder="Samsung, Apple, Sony, Nokia..." defaultValue={phone.brand} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" name="model" placeholder="Galaxy Fold 3, iPhone 13, Xperia Z4..." defaultValue={phone.model} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="text" name="color" placeholder="Black, White, Green...." defaultValue={phone.color} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name="imgUrl" placeholder="Image URL..." defaultValue={phone.imgUrl} required />
                </Form.Group>

                <Form.Label>Grade of conditions</Form.Label>
                <Form.Select aria-label="Default select example" defaultValue={myValue || "default"} onChange={changeHandler} name="grade" required>
                    <option disabled={true} value="default" >Slect a value</option>
                    <option defaultValue="1: Lots of scratches but still working" selected= {phone.grade===":1 Lots of scratches but still working"}>1: Lots of scratches but still working</option>
                    <option defaultValue="2: Some scratches" selected= {phone.grade==="2: Some scratches"}>2: Some scratches</option>
                    <option defaultValue="3: Normal, with a few scratches" selected= {phone.grade==="3: Normal, with a few scratches"}>3: Normal, with a few scratches</option>
                    <option defaultValue="4: Almost like new" selected= {phone.grade==="4: Almost like new"}>4: Almost like new</option>
                    <option defaultValue="5: New" selected= {phone.grade==="5: New"}>5: New</option>
                </Form.Select>

                <Form.Group className="mb-3" >
                    <Form.Label>Accessories</Form.Label>
                    <Form.Control type="text" name="accessories" placeholder="Box, Charger, Cabel..." defaultValue={phone.accessories} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" name="notes" placeholder="Notes..." defaultValue={phone.notes} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder="500lv..." required defaultValue={phone.price} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save changes
                </Button>
            </Form>
        </>
    );
};

export default Edit;