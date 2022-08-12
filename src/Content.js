import React from 'react'
import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Jimmy');
  const [count, setCount] = useState(0);

  const handleNameChange = () =>  {
    const names = ['Gus', 'Jim', 'Bob'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
}

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count)
  }

  const handleClick2 = (name) => {
    console.log(count)
  }

  const handleClick3 = (event1) => {
    console.log(event1.target.innerText)
  }
 
  return (
    <main>
        <p onDoubleClick={handleClick}>
        Hello {name}!
        </p>
        <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleClick2}>Click Me</button>
    </main>
  )
}

export default Content