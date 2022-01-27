import React, { useState } from 'react';
import Form from './Components/Form/Form';

function App(props) {
  const [data, setData] = useState();

  console.log(data);

  return (
    <React.Fragment>
      <h1>React Todo App with Reducer</h1>
      <Form data={setData} />
    </React.Fragment>
  );
}

export default App;
