import React from 'react'

const Content = () => {
    const handleNameChange = () =>  {
    const names = ['Gus', 'Jim', 'Bob'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
}

  const handleClick = () => {
    console.log('you clicked button1')
  }

  const handleClick2 = (name) => {
    console.log(`you clicked ${name}`)
  }

  const handleClick3 = (event1) => {
    console.log(event1.target.innerText)
  }
 
  return (
    <main>
        <p onDoubleClick={handleClick}>
        Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClick2('Dave')}>Click Me</button>
        <button onClick={(event1) => handleClick3(event1)}>Click Me</button>
    </main>
  )
}

export default Content