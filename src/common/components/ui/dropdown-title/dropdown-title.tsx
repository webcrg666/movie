import React from 'react';
import classes from './dropdown-title.module.scss';

function DropdownTitle({ text }: { text: string }) {
  return <p className={classes.title}>{text}</p>;
}

export { DropdownTitle };
