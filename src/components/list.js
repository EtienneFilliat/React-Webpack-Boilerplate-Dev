import React from 'react';
import ReactDOM from 'react-dom';

function List(props) {
  console.log(props);
  const list = props.items.map((item, index) =>
    <li key={index}>
      {item}
    </li>
  );

  return (
    <ul>
      {list}
    </ul>
  );
}

export default List;
