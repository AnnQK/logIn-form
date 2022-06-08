import React from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  return (
    <div className={styles.modal} {...props}>
      <h2>Welcome back</h2>
      <h3>{props.userLogin}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tincidunt sem sit amet sagittis interdum. Donec vehicula tincidunt ipsum
        et posuere. Duis sed faucibus ipsum. Nam fringilla massa et dui
        vulputate suscipit. Morbi vulputate augue at felis fringilla egestas.
      </p>
      <p>
        Nullam venenatis velit vitae massa scelerisque, ac elementum ex aliquam.
        Etiam ut tellus non diam aliquam vehicula vitae et lectus.Nam fringilla
        massa et dui vulputate suscipit. Morbi vulputate augue at felis
        fringilla egestas.
      </p>
    </div>
  );
}

export default Modal;
