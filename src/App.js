import React, { useState } from 'react';
import Select from 'react-select';

function App() {
  const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(3);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }

  return (
    <div className="App">
      <a href="https://www.cluemediator.com">Clue Mediator</a><br /><br />

      <Select
        placeholder="Select Option"
        value={data.filter(obj => obj.value === selectedValue)} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />

      {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>Selected Value: </b> {selectedValue}</div>
      </div>}
    </div>
  );
}

export default App;
