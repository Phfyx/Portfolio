import React from 'react';
import data from '../../assets/data';

function Technos () {
  const technos = data.technos;
  return (
    <div className='justify-center p-8'>
      <h1 className='text-3xl md:text-6xl mb-8 flex justify-center'>Mon stack technique</h1>
      <div className='techno-container flex flex-wrap justify-center'>
      {technos.map((techno) => (
        <div className='flex justify-center m-4'>
          <img className='w-10 h-10 md:w-20 md:h-20' src={techno.image} alt={techno.name} title={techno.name}/>
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Technos;
