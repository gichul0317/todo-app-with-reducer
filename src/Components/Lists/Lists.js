import React from 'react';

function Lists(props) {
  let content = <p>Not available...</p>;
  if (props.data) {
    content = props.data.map((item) => <li key={item.id}>{item.name}</li>);
  }
  return <ul>{content}</ul>;
}

export default Lists;
