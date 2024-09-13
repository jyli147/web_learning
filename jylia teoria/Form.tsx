import { ChangeEvent, useState } from 'react';

type FormProps = {
  onSearch: (text: string) => void,
}


const Form = (props: FormProps) => {
  const [text, updateText] = useState<string>("")

  function onChangeInput(handler: ChangeEvent<HTMLInputElement>) {
    updateText(handler.target.value)
  }

  function onSubmitForm(handler: ChangeEvent<HTMLFormElement>) {
    handler.preventDefault();
    props.onSearch(text)
  }

  function onClickBySearchButton() {
    props.onSearch(text);

  }

  return (
    <form className='form' onSubmit={onSubmitForm}>
      <input type="text" placeholder='Название фильма...' className='input' onChange={onChangeInput} />
      <button type="button" className='form__button' onClick={onClickBySearchButton}></button>
    </form>
  );
};

export default Form;

function useActionState(increment: (n: any) => Promise<any>, arg1: number): [any, any] {
  throw new Error('Function not implemented.');
}
