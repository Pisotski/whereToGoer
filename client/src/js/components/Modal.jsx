import React from 'react';
import Results from './Results';

import '../../css/modal.css';


const Modal = ({
  handleClose, show, children, placeData,
}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <Results placeData={placeData} />
      </div>
      <button
        onClick={handleClose}
      >
          Close
      </button>
    </div>
  );
};

export default Modal;
