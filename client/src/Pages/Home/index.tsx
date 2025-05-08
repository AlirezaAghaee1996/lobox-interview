import React, { useState } from 'react';
import MultiDropDown from '../../Components/MultiDropDown';
import './Home.scss'
const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([
    { label: 'Physics', value: 'physics', select: false },
    { label: 'Chemistry', value: 'chemistry', select: true },
    { label: 'Biology', value: 'biology', select: false },
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