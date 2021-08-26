import React from 'react'

export default function TodoItem({ item, onItemDeleted }) {
  const btnDel_Clicked = function () {
    // alert(item.id);
    onItemDeleted(item.id);
  }

  return (
    <li className={item.complete ? 'done' : ''}>
      {item.title}
      {!item.complete && <button onClick={btnDel_Clicked}>Delete</button>}
    </li>
  )
}
