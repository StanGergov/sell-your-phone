import { Link } from 'react-router-dom';
import './PhoneCard.css';

const PhoneCard = ({ phone }) => {
    return (

        <div className='phone-card' >
            <Link to={`/details/${phone._id}`} className="card-content">

                <img src={phone.imgUrl} />
                <p>{phone.brand} {phone.model} <br></br>
                    Price: {phone.price}lv</p>

            </Link>
        </div>



    )
}

export default PhoneCard;