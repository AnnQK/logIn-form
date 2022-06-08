import React from 'react';
import styles from './Input.module.css';

// const StyledInput = styled.input`
//   padding-left: 20px;
//   height: 40px;
//   width: 275px;
//   background: #f7f7f7;
//   border: none;
//   border-radius: 10px;
// `;

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <input
        className={`${styles.input} ${props?.className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
