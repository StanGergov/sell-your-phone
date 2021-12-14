import { Modal, Button } from 'react-bootstrap';

const ConfirmDialog = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete this phone?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to delete the ad for this phone?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onSave}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDialog;