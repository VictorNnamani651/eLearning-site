import { useState, useEffect } from "react";

const IncompleteProjectModal = () => {
  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Check sessionStorage to see if modal has been dismissed before and if it has then don't show it again (cause it's annoying)
  useEffect(() => {
    const dismissed = sessionStorage.getItem("incompleteProjectModalDismissed");
    if (!dismissed) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    sessionStorage.setItem("incompleteProjectModalDismissed", "true");
  };

  // Conditional rendering based on the `showModal` state
  if (!showModal) {
    return null; // Don't render anything if the modal is not visible
  }

  return (
    <>
      <div
        className="modal fade show"
        id="incompleteProjectModal"
        tabIndex="-1"
        aria-labelledby="incompleteProjectLabel"
        aria-hidden="true"
        style={{ display: "block" }} // Manually show the modal
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4">
            <div className="modal-header bg-danger text-dark rounded-top-4">
              <h5
                className="modal-title text-light"
                id="incompleteProjectLabel"
              >
                Heads Up!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body fs-5">
              This project isn't complete yet, but you can take a look at what's
              been done so far.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleClose}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default IncompleteProjectModal;
