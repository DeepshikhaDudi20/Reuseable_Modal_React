import * as S from "./styles";

const Button = ({ setShowModal, showModal, btnText }) => {
  return (
    <S.ModalButtonPrimary
      role="button"
      aria-labelledby={btnText}
      onClick={() => setShowModal(!showModal)}
    >
      {btnText}
    </S.ModalButtonPrimary>
  );
};

export default Button;
