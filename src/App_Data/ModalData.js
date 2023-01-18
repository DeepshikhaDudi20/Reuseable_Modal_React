import { ModalPositionX, ModalPositionY } from "./ModalPosition";

export const Modal_Content = {
  confirmationModal: {
    title: "Join NewDay",
    showHeader: true,
    showOverlay: true,
    positionX: ModalPositionX.center,
    positionY: ModalPositionY.center,
    padding: "20px"
  },
  subscribeModal: {
    title: "Join Our Newsletter",
    showHeader: false,
    showOverlay: true,
    positionX: ModalPositionX.center,
    positionY: ModalPositionY.center,
    padding: "20px"
  },
  infoModal: {
    title: "Information Modal",
    showHeader: false,
    showOverlay: true,
    positionX: ModalPositionX.left,
    positionY: ModalPositionY.start,
    padding: "0"
  }
};
