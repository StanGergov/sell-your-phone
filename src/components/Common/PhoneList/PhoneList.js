import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css';

const PhoneList = ({ phones }) => {
    return (
        <div className='phone-list'>
            {phones.map((phone) => (
                <PhoneCard phone={phone} key={phone._id} />
            ))}
        </div>
    )
};



export default PhoneList;