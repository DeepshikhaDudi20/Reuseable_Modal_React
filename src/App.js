import { useState } from "react";
import Modal from "./shared/components/Modals/Modal";
import Button from "./shared/components/Button/Button";
import { Modal_Content } from "./App_Data/ModalData";
import * as S from "./shared/components/Modals/styles";
import Header from "./shared/components/layout/Header";
import Theme from "./shared/components/Theme/Theme";
import { ThemeStore } from "./shared/contexts/ThemeStore";
import { btnText } from "../src/App_Data/HomePageData";

const App = () => {
  const [showConfimationModal, setShowConfimationModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Perform action on Accept Button click
  const onClickAccept = () => {
    // Redirect to different link or routes and then call modal (as part of improvement)
    setShowConfimationModal(!showConfimationModal);
  };

  // Perform action on submitting subscribe button
  const onClickSubmit = () => {
    // Implement logic here for subscribe, submit details, perform email vaildation
    // and then close modal (as part of improvement)
    setShowSubscribeModal(!showSubscribeModal);
  };

  return (
    <ThemeStore>
      <Theme>
        <Header />
        <main>
          <S.ModalButtonsContainer>
            <Button
              showModal={showConfimationModal}
              setShowModal={setShowConfimationModal}
              btnText={btnText.confirmationModalBtnText}
            />
            <Button
              showModal={showSubscribeModal}
              setShowModal={setShowSubscribeModal}
              btnText={btnText.subscribeModalBtnText}
            />
            <Button
              showModal={showErrorModal}
              setShowModal={setShowErrorModal}
              btnText={btnText.errorModalBtnText}
            />
          </S.ModalButtonsContainer>
          <Modal
            showModal={showConfimationModal}
            setShowModal={setShowConfimationModal}
            config={Modal_Content.confirmationModal}
          >
            <h1 role="region" aria-label="NewDay Offers">
              NewDay Offers
            </h1>
            <p role="region" aria-label="Fancy NewDay Credit card ?">
              Fancy NewDay Credit card ?
            </p>
            <S.ModalFooter>
              <S.ModalButtonSecondary
                role="button"
                aria-labelledby="Decline"
                data-testid="button-decline"
                onClick={() => setShowConfimationModal(!showConfimationModal)}
              >
                Decline
              </S.ModalButtonSecondary>
              <S.ModalButtonPrimary
                role="button"
                aria-labelledby="Apply"
                data-testid="button-apply"
                onClick={onClickAccept}
              >
                Apply
              </S.ModalButtonPrimary>
            </S.ModalFooter>
          </Modal>

          <Modal
            showModal={showSubscribeModal}
            setShowModal={setShowSubscribeModal}
            config={Modal_Content.subscribeModal}
          >
            <h1 role="region" aria-label="Don't miss out!">
              Don't miss out!
            </h1>
            <p
              role="region"
              aria-label="Sign up to get the best deals, first looks and more !"
            >
              Sign up to get the best deals, first looks and more !
            </p>
            <input type="email" placeholder="Please enter your email" />
            <S.ModalFooter>
              <S.ModalButtonPrimary
                role="button"
                aria-labelledby="Count me in"
                data-testid="button-subscribe"
                type="submit"
                onClick={onClickSubmit}
              >
                Count me in
              </S.ModalButtonPrimary>
            </S.ModalFooter>
          </Modal>

          <Modal
            showModal={showErrorModal}
            setShowModal={setShowErrorModal}
            config={Modal_Content.infoModal}
            data-testid="error"
          >
            <h1 role="region" aria-label="Information Message">
              Information Message
            </h1>
            <p role="region" aria-label="Modal location is flexible">
              Modal location is flexible
            </p>
          </Modal>
        </main>
      </Theme>
    </ThemeStore>
  );
};

export default App;
