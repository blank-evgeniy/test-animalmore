import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    onClose;
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="relative rounded-lg bg-white p-8 shadow-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-8 top-8 z-20 text-[48px] leading-[48px] text-slate-800 transition-colors hover:text-gray"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
