import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';

import './Create.css';

import * as phoneServices from '../../services/phoneService';
import { useAuthContext } from '../../contexts/authContext';


const Create = () => {

    const { user } = useAuthContext();
    const navigate = useNavigate();

    const createNewAd = (e) => {
        e.preventDefault();

        const formDate = new FormData(e.target);
       
        const phoneData = Object.fromEntries(formDate);

        phoneServices.create(phoneData, user.accessToken)
            .then((res) => res.json())
            .then(data => {
                navigate(`/details/${data._id}`);
            })
            .catch(err => console.log(err))

    }


    const [myValue, setMyValue] = useState('');
    const changeHandler = (e) => {
        setMyValue(e.target.value);
    };



    return (
        <>
            <h1 className="page-title">Create an ad for your phone</h1>
            <Form className="ad-form" method="POST" onSubmit={createNewAd}>
                <Form.Group className="mb-3" >
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" name="brand" placeholder="Samsung, Apple, Sony, Nokia..." required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" name="model" placeholder="Galaxy Fold 3, iPhone 13, Xperia Z4..." required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="text" name="color" placeholder="Black, White, Green...." required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name="imgUrl" placeholder="Image URL..." required />
                </Form.Group>

                <Form.Label>Grade of conditions</Form.Label>
                <Form.Select aria-label="Default select example" defaultValue={myValue || "default"} onChange={changeHandler} name="grade" required>
                    <option disabled={true} value="default" >Slect a value</option>
                    <option value="1 Lots of scratches but still working">1: Lots of scratches but still working</option>
                    <option value="2 Some scratches">2: Some scratches</option>
                    <option value="3 Normal, with a few scratches">3: Normal, with a few scratches</option>
                    <option value="4 Almost like new">4: Almost like new</option>
                    <option value="5 New">5: New</option>
                </Form.Select>

                <Form.Group className="mb-3" >
                    <Form.Label>Accessories</Form.Label>
                    <Form.Control type="text" name="accessories" placeholder="Box, Charger, Cabel..." />
                </Form.Group>

                {/* <Form.Label >Accessories</Form.Label>
                <div className="mb-3">
                    <input type= "checkbox" lable="Box" inine="true" id="box">Box</input>
                    <input type= "checkbox" lable="charger" inine="true" id="charger">Charger</input>
                    <input type= "checkbox" lable="cable" inine="true" id="cable">Cable</input>
                    <input type= "checkbox" lable="headphones" inine="true" id="headphones">Headphones</input> */}
                {/* <Form.Check
                        inline
                        label="Box"
                        name="box"
                        type="checkbox"
                        id="box"
                        
                    />
                    <Form.Check
                        inline
                        label="Charger"
                        name="charger"
                        type="checkbox"
                        id="charger"
                    />
                    <Form.Check
                        inline
                        label="Cable"
                        type="checkbox"
                        name="cable"
                        id="cable"
                    />
                    <Form.Check
                        inline
                        label="Headphones"
                        name="headphones"
                        type="checkbox"
                        id="headphones"
                    /> */}
                {/* </div> */}

                <Form.Group className="mb-3" >
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" name="notes" placeholder="Notes..." />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder="500lv..." required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </>
    );
};

export default Create;