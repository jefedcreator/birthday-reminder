import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
 const [birthdays, setBirthdays] = useState(data)
 console.log(birthdays);

 const newBithday = birthdays.map(birthday => {
  return <List 
    key={birthday.id} 
    image={birthday.image} 
    name={birthday.name}
    age={birthday.age}
  />
 })
  
 const clearBirthday = () =>{
   setBirthdays(prevBirthdays => [])
 }

  return (
    <main>
      <section className='container'>
       <h2>{birthdays.length} birthdays today</h2>
        {newBithday}
       <button onClick={clearBirthday}>clear all</button>
      </section>
    </main>
  );
}

export default App;
