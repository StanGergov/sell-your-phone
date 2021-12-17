import { Spinner } from 'react-bootstrap';
import './spinner.css';

const SpinnerOverlay = () => {
    return (<div className='spinner-overlay'>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>)
}

export default SpinnerOverlay;