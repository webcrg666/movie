import React from 'react';
import classNames from 'classnames';
import styles from './icon-button.module.scss';

interface IButtonProps {
  image: string;
  height: string;
  width: string;
  label: string;
  disabled?: boolean;
  dataId?: string | number;
  dataName?: string;
  onClick?: () => void;
}

function IconButton({
  image,
  height,
  width,
  label,
  disabled,
  dataId,
  dataName,
  onClick,
}: IButtonProps) {
  const buttonStyles = classNames(styles.button, {
    [styles.disabled]: disabled,
  });

  return (
    <button type="button" className={buttonStyles} onClick={onClick}>
      <img
        src={image}
        alt=""
        aria-label={label}
        style={{ height, width }}
        data-id={dataId}
        data-button-name={dataName}
      />
    </button>
  );
}

export { IconButton };
