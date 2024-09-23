import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default React.memo(Item);
