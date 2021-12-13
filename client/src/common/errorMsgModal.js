import { Modal } from "react-bootstrap";

function ServerErrorMsg ({show, error, handleClose }) {
    return(
    <Modal show={show} onHide={handleClose} > 
      <Modal.Header closeButton>
        <Modal.Title>{error}</Modal.Title>
      </Modal.Header>
    </Modal>
    )
};

export default ServerErrorMsg;
