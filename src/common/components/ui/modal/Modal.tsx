import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './modal.module.scss';

interface IModalProps {
  active: boolean;
  children: ReactNode;
  setStatus: (arg0: boolean) => void;
}

function Modal({ active, children, setStatus }: IModalProps) {
  console.log(active);

  const modalStyles = classNames(styles.modal, {
    [styles.modalActive]: active,
  });
  const contentStyles = classNames(styles.content, {
    [styles.contentActive]: active,
  });

  const handleBackgroundClick = () => {
    setStatus(false);
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
