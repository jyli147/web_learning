import { useState } from 'react'
import Button from './Button'


function App() {
  const [value, setValue] = useState<string>('"Нажми на кнопку"'); 

 

  function hendelClick(value:string) {
    console.log(value);
    setValue(value);
}

  return (
    <>
            <h1>Ghbdtn   </h1>
      <Button onClick={()=> hendelClick('way')}>Текст</Button>
      <Button onClick={()=> hendelClick('esye')}>Родход</Button>
      <Button onClick={()=> hendelClick('program')}>Доступность</Button>
      <p>{value}</p>
    </>
  )
}

export default App
