import React from 'react';
import classes from './DropdownTitle.module.css';

function DropdownTitle({ text }: { text: string }) {
  return <p className={classes.title}>{text}</p>;
}

export { DropdownTitle };
