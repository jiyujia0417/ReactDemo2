import React from 'react';

const List = (props) => {
    return <ul>
      {
        props.data.map(
          (item) => <li key={item.id}>{item.title}</li>
        )
      }
    </ul>
  }

  export default List;