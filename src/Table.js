import React from 'react';

function ChildTable(props) {
  const myData = 'helloWorld';
  return (
    <>
      <td>{props.data.Hn}</td>
      <td>{props.data.city}</td>
      <td>{/*sending data from child to parent component  */}
        <button onClick={() => props.fn(myData)}>ClickMe</button>
      </td>
    </>
  );
}

export default ChildTable;
