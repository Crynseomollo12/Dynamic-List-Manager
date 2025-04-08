import { useState } from 'react'
import './DynamicListManager.css';
const DynamicListManager = () => {
  const [items, setItems] = useState(['first item']);
  const [inputvalue, setInputValue] = useState('');
  const handleAddItem = () => {
    if (inputvalue.trim() !== '') {
      setItems([...items, inputvalue]);
      setInputValue('');
    }
  };

  return (

      <div className="app-container">
        <h1>Dynamic List Manager</h1>
       <div className="input-group">
          <input
            type="text"
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter an item"
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <ul className="item-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
        );
        }
        export default DynamicListManager;
     
