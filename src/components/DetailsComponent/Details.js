
import {Button} from 'react-bootstrap';
import './Details.css';

const phone = {
    accessories: "box, charger, cable",
    brand: "apple",
    color: "black",
    grade: "4 Almost like new",
    imgUrl: "https://m.media-amazon.com/images/I/61o3iuZ0aXL._AC_SL1500_.jpg",
    model: "iphone",
    notes: "sdssfdasdf",
    price: "2500",
};


const Details = () => {

    return (
        <div>
            <div className="page-title">{phone.brand} {phone.model}</div>
            <div className="page-content">
                <img src={phone.imgUrl} className="image" alt="img" />
                <div className="phone-details">

                    <h3>Price:</h3>
                    <h2>{phone.price} lv</h2>

                    <h4>Color</h4>
                    <h5>{phone.color}</h5>

                    <h4>Grade of conditions</h4>
                    <h5>{phone.grade}</h5>

                    <h4>Accessories</h4>
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

                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </div>
            {/* <table>
                <th>
                    <img src={phone.imgUrl} className="image" alt="img" />
                </th>
            </table> */}

        </div>

    );
}

export default Details