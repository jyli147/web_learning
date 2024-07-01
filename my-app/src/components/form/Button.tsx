import React from 'react';

const Button = ({ ...props}) => {
    return (
        <button type='submit' className='form__button' {...props}>
         </button>
    );
};

export default Button;