import React, {useState, ChangeEvent, FormEvent, MouseEvent} from 'react';
import Button from './Button';
import Input from './Input';

type FormProps = {
    onSearch: (text: string) => void,
  }

const Form = (props: FormProps) => {
    
    const [value, setValue] = useState<string>('');

        function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
            setValue(e.target.value);
        }
 
        function handleSubmit(e: FormEvent<HTMLFormElement>) {
            e.preventDefault();
            props.onSearch(value);
    }
    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        props.onSearch(value);
       
    }
    function handleClickEnter(e: KeyboardEvent) {
        if(e.key === 'Enter'){
            props.onSearch(value);
          }
          }

    return (
        <form
        onSubmit={handleSubmit}
        className="form">
        <Input
        value={value}
        onChange={handleChangeInput}
        />
        <Button onClick={handleClick} onKeyPress={handleClickEnter}></Button>
      </form>
    );
};

export default Form;