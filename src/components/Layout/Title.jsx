import React from 'react';
import styles from './Title.module.css';

function Title({ text, rest }) {
  return (
    <h1 className={styles.title} {...rest}>
      {text}
    </h1>
  );
}

export default Title;
