import React, { useState } from 'react';
import Form from './Components/Form/Form';
import Lists from './Components/Lists/Lists';

function App(props) {
  const [data, setData] = useState();

  // console.log(data);

  return (
    <React.Fragment>
      <h1>React Todo App with Reducer</h1>
      <Form data={setData} />
      <Lists data={data} />
    </React.Fragment>
  );
}

export default App;
