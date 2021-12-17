import PhoneCard from '../PhoneCard/PhoneCard';
import './PhoneList.css';

const PhoneList = ({ phones }) => {
    return (
        <div className='phone-list'>
            {phones.map((phone) => (
                <PhoneCard phone={phone} />
            ))}
        </div>
    )
};

export default PhoneList;