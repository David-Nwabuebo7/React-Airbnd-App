import logo from './images/airbnb-logo.png'
import grid from './images/photo-grid.png'

import './App.css';
import Card from './card'
import Data from './data'

function Top() {
 const render = Data.map(info =>{
  console.log(info);
   return <Card 
                key = {info.id}
               info ={info}
          />
 })
  
  return (
    <div className="App">
    <nav className='nav' >
        <img src={logo} className='logo' />
    </nav>
    <nav className='hero'> 
        <section className='hero'>
            <img src={grid} className='hero--photo' />
            <h2 className='large'>Online Experiences</h2>
            <p className='small'>Join unique interactive activities lead by one-of-a-kind hosts-all without leaving home</p>
        </section>
      
    </nav>
    <nav className='card'>  
      <section className='cards-list'> 
         {render}
      </section>
        
    </nav> 
    
  </div>
  );
}
export default Top;

