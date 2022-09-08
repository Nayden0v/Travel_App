import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import data from './Components/data';

export default function App() {
  const dataItems = data.map(item=> <Card 
    key = {item.id}
    {...item}
  />)
  return (
  <div className='content'>
  <Navbar />
  {dataItems}
    </div>
  );
}


