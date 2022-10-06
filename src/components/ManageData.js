import React from 'react';
import { useState } from 'react';

const ManageData = () => {
  let somedata = 10;

  console.log(somedata);

  let [number, setNumber] = useState(15);

  console.log(number);

  return (
    <div>
      <div>
        <p>Valor:{somedata}</p>
        <button onClick={() => (somedata = 15)}>Mudar variável</button>
      </div>

      <div>
        <p>Valor:{number}</p>
        <button
          onClick={() => setNumber(25)}>
          Mudar variável2
        </button>
      </div>
    </div>
  );
};

export default ManageData;
