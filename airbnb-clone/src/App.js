import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import data from './data'


function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards__list'>
        {cards}
      </section>
    </>
  );
}

export default App;
