import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './PhoneForm.css'

const PhoneForm = ({
    submit,
    phone = {
        brand: '',
        model: '',
        color: '',
        imgUrl: '',
        grade: '',
        accessories: '',
        notes: '',
        price: '',
    }
}) => {
    const [formData, setFormData] = useState(() => {
        return { ...phone, grade: phone['grade'] ? phone['grade'] : 'default' }
    });

    function submitHandler(e) {
        e.preventDefault();
        submit(formData);
    }

    const onChangeValidationHandler = (e) => {
        let target = e.currentTarget.name;
        let value = e.currentTarget.value;

        const newFormData = { ...formData };

        newFormData[target] = value;
        return setFormData(newFormData);
    };



    return (
        <Form className="ad-form" method="POST" onSubmit={submitHandler}>
            <Form.Group className="mb-3">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                    type="text"
                    name="brand"
                    minLength="3"
                    placeholder="Samsung, Apple, Sony, Nokia..."
                    value={formData['brand']}
                    onChange={onChangeValidationHandler}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Model</Form.Label>
                <Form.Control type="text" name="model" minLength="3" placeholder="Galaxy Fold 3, iPhone 13, Xperia Z4..."
                    value={formData['model']} required onChange={onChangeValidationHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" name="color" minLength="3" placeholder="Black, White, Green...." value={formData['color']}
                    required onChange={onChangeValidationHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="imgUrl" pattern="^https?:\/\/[\w?\W?]+$" placeholder="Image URL..." value={formData['imgUrl']} required
                    onChange={onChangeValidationHandler} />
            </Form.Group>

            <Form.Label>Grade of conditions</Form.Label>
            <Form.Select aria-label="Default select example" value={formData['grade']} onChange={onChangeValidationHandler}
                name="grade" required>
                <option disabled={true} value="default">Slect a value</option>
                <option value="1: Lots of scratches but still working">1: Lots of scratches but still working</option>
                <option value="2: Some scratches">2: Some scratches</option>
                <option value="3: Normal, with a few scratches">3: Normal, with a few scratches</option>
                <option value="4: Almost like new">4: Almost like new</option>
                <option value="5: New">5: New</option>
            </Form.Select>

            <Form.Group className="mb-3">
                <Form.Label>Accessories</Form.Label>
                <Form.Control type="text" name="accessories" placeholder="Box, Charger, Cabel..."
                    value={formData['accessories']} onChange={onChangeValidationHandler} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Notes</Form.Label>
                <Form.Control type="text" name="notes" placeholder="Notes..." value={formData['notes']}
                    onChange={onChangeValidationHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" min="0" max="10000" placeholder="500lv..." value={formData['price']} required
                    onChange={onChangeValidationHandler} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    );
};

export default PhoneForm;