import React from 'react';

const Input = ({...props}) => {
    return (
        <input
            {...props}
            className='input'
            type="text"/>
    )       
};

export default Input;