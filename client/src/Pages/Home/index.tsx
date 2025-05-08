import React, { useState } from 'react';
import MultiDropDown from '../../Components/MultiDropDown';
import './Home.scss'
const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([
    { label: '🧪 Chemistry', value: 'chemistry', select: true },
    { label: '📘 Physics', value: 'physics', select: false },
    { label: '🧬 Biology', value: 'biology', select: false },
    { label: '🌍 Geography', value: 'geography', select: false },
    { label: '📖 History', value: 'history', select: false },
    { label: '💻 Computer Science', value: 'computer_science', select: false },
    { label: '🧠 Psychology', value: 'psychology', select: false },
    { label: '🧮 Mathematics', value: 'mathematics', select: false },
  ]);
  
  
  const handleChange = (val: any) => {
    setItems([...items, val]);
  };
  const handleSelect = (selectedItems: any[]) => {
    setItems(selectedItems);
  };
  return (
    <div className='home-container'>
        <MultiDropDown items={items} name="Science"   handleChange={handleChange} placeholder="Science" handleSelect={handleSelect} />
    </div>
  );
};

export default Home;