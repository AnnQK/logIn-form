import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      className={`${styles.button} + ${props?.className}`}
      {...props}
    ></button>
  );
}

export default Button;
