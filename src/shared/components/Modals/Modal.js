import { useEffect } from "react";
import PortalModal from "./PortalModal";
import * as S from "./styles";
import "../../../styles/modal.css";

const Modal = ({ children, showModal, setShowModal, config }) => {
  const activeElement = document.activeElement;
  let activeIndex = -1;
  let focusableElements = [];

  const handleTab = (evt) => {
    let modal = document.getElementById("modal");

    if (modal) {
      // Get list of focusable elements present in modal
      focusableElements = modal.querySelectorAll("button, input");
      let total = focusableElements.length;

      // If tab key is pressed
      if (!evt.shiftKey) {
        // If activeIndex + 1 larger than array length focus on first element otherwise focus on next element
        activeIndex + 1 === total ? (activeIndex = 0) : (activeIndex += 1);

        focusableElements[activeIndex].focus();

        return evt.preventDefault();
      }

      // If shift key is pressed
      if (evt.shiftKey) {
        // if activeIndex - 1 less than 0 focus on last element otherwise focus on previous element
        activeIndex - 1 < 0 ? (activeIndex = total - 1) : (activeIndex -= 1);

        focusableElements[activeIndex].focus();

        return evt.preventDefault();
      }
    }
  };

  const handleEscape = (evt) => {
    if (evt.key === "Escape") setShowModal(false);
  };

  // map keyboard listeners
  const keyListenersMap = new Map([
    [27, handleEscape],
    [9, handleTab]
  ]);

  const handleKeydown = (evt) => {
    // get the listener corresponding to the pressed keyevent
    const listener = keyListenersMap.get(evt.keyCode);

    // call the listener if it exists
    return listener && listener(evt);
  };

  useEffect(() => {
    // Attach  event listener when component mounts
    document.addEventListener("keydown", handleKeydown);

    return () => {
      // Detach event listener when component unmounts
      document.removeEventListener("keydown", handleKeydown);
      // Return focus to the previously focused element after detaching listener
      activeElement.focus();
    };
  });

  //To remove scroll on parent page when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [showModal]);

  return (
    <>
      {showModal && (
        <PortalModal wrapperId="modal-portal">
          <S.Overlay
            role="dialog"
            aria-modal="true"
            aria-labelledby="Modal title"
            showOverlay={config.showOverlay}
            positionX={config.positionX}
            positionY={config.positionY}
            showModal={showModal}
            style={{
              animationDuration: "400ms",
              animationDelay: "0"
            }}
          >
            <S.ModalContainer
              id="modal"
              role="document"
              aria-labelledby="Modal content"
              data-testid="modal-container"
              padding={config.padding}
            >
              {config.showHeader && (
                <S.ModalHeader
                  aria-labelledby="Modal header"
                  data-testid="modal-header"
                >
                  <h1>{config.title}</h1>
                </S.ModalHeader>
              )}

              <S.Close
                aria-label="Close modal"
                data-testid="modal-close"
                aria-keyshortcuts="Escape"
                onClick={() => setShowModal(!showModal)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </S.Close>

              <S.Content>{children}</S.Content>
            </S.ModalContainer>
          </S.Overlay>
        </PortalModal>
      )}
    </>
  );
};

export default Modal;
