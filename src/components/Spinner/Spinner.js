import { Bars } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { Overlay } from './Spinner.styled';

const modalRoot = document.querySelector('#modal-root');

const Spinner = () => {
  return createPortal(
    <Overlay className="overlay">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Overlay>,
    modalRoot
  );
};

export default Spinner;
