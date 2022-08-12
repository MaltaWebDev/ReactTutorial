import { useState } from "react";

const Content2 = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'one half pound bag of cocoa'
        },
        {
            id: 2,
            checked: false,
            item: 'item 2'
        }, 
        {
            id: 3,
            checked: false,
            item: 'item 3'
        }
    ]);

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li class='item' key={item.id}>
                        <input 
                        type='checkbox'
                        checked={item.checked}
                        />
                    <label>{item.item}</label>
                    <button>Delete</button>
                    </li>
                ))}
            </ul>

        </main>
    )}


export default Content2