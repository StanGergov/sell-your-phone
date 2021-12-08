import { Form, Button } from 'react-bootstrap';

import './Create.css';


const Create = () => {

    const createNewAd = (e) => {
        e.preventDefault()

        const formDate = new FormData(e.target);
        console.log(Object.fromEntries(formDate));
    }

    return (
        <>
            <h1 className="page-title">Create an ad for your phone</h1>
            <Form className="ad-form" onSubmit={ createNewAd }>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control type="text" name="brand" placeholder="Samsung, Apple, Sony, Nokia..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Model</Form.Label>
                    <Form.Control type="text" name="model" placeholder="Galaxy Fold 3, iPhone 13, Xperia Z4..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Color</Form.Label>
                    <Form.Control type="text" name="color" placeholder="Black, White, Green...." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name="imgUrl" placeholder="Image URL..." />
                </Form.Group>

                <Form.Label>Grade of conditions</Form.Label>
                <Form.Select aria-label="Default select example" name="grade">
                    <option>Select a value</option>
                    <option value="1 Lots of scratches but still working">1 Lots of scratches but still working</option>
                    <option value="2 Some scratches">2 Some scratches</option>
                    <option value="3 Normal, with a few scratches">3 Normal, with a few scratches</option>
                    <option value="4 Almost like new">4 Almost like new</option>
                    <option value="5 New">5 New</option>
                </Form.Select>

                <Form.Label name="accessories">Accessories</Form.Label>
                {/* <form name="accessories">
                    <input type="checkbox" name="box">Box</input>
                    <input type="checkbox" name="charger">Charger</input>
                    <input type="checkbox" name="cable">Cable</input>
                    <input type="checkbox" name="headphones">Headphones</input>
                </form> */}
                <div className="mb-3">
                    <Form.Check
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
                    />
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control type="text" name="notes" placeholder="Notes" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name="price" placeholder="500lv..." />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </>
    );
};

export default Create;