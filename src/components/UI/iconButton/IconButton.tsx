import React from 'react';
import classNames from 'classnames';
import styles from './IconButton.module.css';

interface IButtonProps {
  image: string;
  height: string;
  width: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

function IconButton({
  image,
  height,
  width,
  label,
  disabled,
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
    />
  );
}

export { IconButton };
