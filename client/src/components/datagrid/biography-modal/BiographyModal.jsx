import React from "react";
import PropTypes from "prop-types";

import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "./styles.scss";

const BiographyModal = ({ open, setOpen, modalContent }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <div className="biographyModal__content">
        <div className="biographyModal__content__header">
          <div
            className="biographyModal__content__header__title"
            data-testid="name"
          >
            {modalContent.name}
          </div>
          <div className="biographyModal__content__header__closeButton">
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <div
          className="biographyModal__content__description"
          data-testid="biography"
        >
          {modalContent.biography}
        </div>
      </div>
    </Modal>
  );
};

BiographyModal.defaultProps = {
  open: false,
  setOpen: () => {},
  modalContent: { name: "", biography: "" }
};

BiographyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  modalContent: PropTypes.object.isRequired
};

export default BiographyModal;
