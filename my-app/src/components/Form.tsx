import React from 'react';

const Form = () => {
    return (
        <form className='form'>
        <input type="text" placeholder='Название фильма...' className='input' />
        <button type="button" className='form__button'></button>
      </form>
    );
};

export default Form;