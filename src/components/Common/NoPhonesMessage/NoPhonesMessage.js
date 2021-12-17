import './NoPhones.css';

const NoPhonesMessage = (props) => {
    return (
        <div className="no-phones">
            <div className="page-title">No phones on list</div>
            <div className="no-phones-buttons">
                {props.children}
            </div>
        </div>
    )
}

export default NoPhonesMessage