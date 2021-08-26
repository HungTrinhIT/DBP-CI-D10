import React from 'react'

import TodoItem from './TodoItem'

export default function TodoList({ list, query, onItemDeleted }) {


  const onItemDeletedHandler = function (itemId) {
    onItemDeleted(itemId);
  }

  return (
    <div>
      <h3>Todo</h3>
      <ul>
        {
          list
            .filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
            .map(item => <TodoItem key={item.id} item={item} onItemDeleted={onItemDeletedHandler} />)
        }
      </ul>
  
    </div>
  )
}

