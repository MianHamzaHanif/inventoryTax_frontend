import React from 'react'
import { MdOutlineCreateNewFolder } from "react-icons/md";
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
const Model = (props) => {
  return (
    
<section>



<Modal
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        {...props}
        
      >
      <Modal.Dialog closeButton>
        <Modal.Header>
        <div class="nine">
          <h1 className="mt-4">
            Add Product<span>HiTech Solution</span>
          </h1>
        </div>
        </Modal.Header>

        <Modal.Body>
        <div className="d-block p-4">
              <label for="inp" class="inp mb-3 d-block">
                <input type="number" id="inp" placeholder="&nbsp;" />
                <span class="label">id #</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp d-block mb-3">
                <input type="text" id="inp" placeholder="&nbsp;" />
                <span class="label">Product Name</span>
                <span class="focus-bg"></span>
              </label>
              <label for="inp" class="inp d-block">
                <input type="number" id="inp" placeholder="&nbsp;" />
                <span class="label">Product price</span>
                <span class="focus-bg"></span>
              </label>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>
</section>
  )
}

export default Model