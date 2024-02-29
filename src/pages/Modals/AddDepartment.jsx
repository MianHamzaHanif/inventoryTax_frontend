import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa6";


function AddDepartment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='new_btn p-1' onClick={handleShow}>
      <FaPlus className="fs-4 "/>
      </Button>

      <Modal show={show} onHide={handleClose} className='rounded'>
        <Modal.Header closeButton>
          <Modal.Title>Add New Department</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="d-block">
              <label for="inp" class="inp d-block w-100">
                <input type="text" id="inp" placeholder="&nbsp;" />
                <span class="label">Department</span>
                <span class="focus-bg"></span>
              </label>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='new_btn2' onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDepartment;