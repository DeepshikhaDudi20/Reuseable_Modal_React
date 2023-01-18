import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const PortalModal = ({ children, wrapperId }) => {
  const [portalElement, setPortalElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let portalCreated = false;
    //  if element is not found with wrapperId or wrapperId is not provided,
    //  create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
      portalCreated = true;
    }

    setPortalElement(element);

    // cleaning up the portal element
    return () => {
      // delete the programatically created element
      if (portalCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  const createWrapperAndAppendToBody = (elementId) => {
    const element = document.createElement("div");
    element.setAttribute("id", elementId);
    document.body.appendChild(element);
    return element;
  };

  // portalElement state will be null on the very first render.
  if (!portalElement) return null;

  return createPortal(children, portalElement);
};

export default PortalModal;
