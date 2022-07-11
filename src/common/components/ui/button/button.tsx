import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

interface IButtonProps {
  color?: string;
  type?: string;
  children: ReactNode;
  fullwidth?: boolean;
  disabled?: boolean;
  dataId?: string | number;
  dataName?: string;
  onClick?: () => void;
}

const colorTypes: { [color: string]: string } = {
  green: styles.green,
  black: styles.black,
  blue: styles.blue,
};

const buttonTypes: { [type: string]: string } = {
  card: styles.cardType,
};

function Button({
  color = '',
  type = '',
  children,
  fullwidth,
  disabled,
  dataId,
  dataName,
  onClick,
}: IButtonProps) {
  const buttonStyles = classNames(
    styles.button,
    colorTypes[color],
    buttonTypes[type],
    {
      [styles.fullwidth]: fullwidth,
      [styles.disabled]: disabled,
    }
  );

  return (
    <button
      type="button"
      className={buttonStyles}
      onClick={onClick}
      data-id={dataId}
      data-button-name={dataName}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default React.memo(Button);
