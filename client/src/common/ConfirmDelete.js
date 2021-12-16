import { Modal, Button } from 'react-bootstrap';

const ConfirmDelete = ({
    show,
    onClose,
    onSave,
}) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete this pet listing?</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="danger" onClick={onSave}>Delete Pet</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmDelete;