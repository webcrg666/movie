import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.css';

interface IModalProps {
  active: boolean;
  children: ReactNode;
  setActive: (arg0: boolean) => void;
}

function Modal({ active, children, setActive }: IModalProps) {
  const modalStyles = classNames(styles.modal, {
    [styles.modalActive]: active,
  });
  const contentStyles = classNames(styles.content, {
    [styles.contentActive]: active,
  });

  const handleBackgroundClick = () => {
    setActive(false);
  };

  const handleContentClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={modalStyles}
      onClick={handleBackgroundClick}
      role="presentation"
    >
      <div
        className={contentStyles}
        onClick={handleContentClick}
        role="presentation"
      >
        {children}
      </div>
    </div>
  );
}

export { Modal };
