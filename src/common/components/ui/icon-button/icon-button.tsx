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

  const createdStyle = {
    height,
    width,
    backgroundImage: `url(${image})`,
  };

  return (
    <button
      type="button"
      className={buttonStyles}
      style={createdStyle}
      onClick={onClick}
      aria-label={label}
      data-id={dataId}
      data-button-name={dataName}
    />
  );
}

export { IconButton };
