import React, { useEffect, useState } from 'react'

export default function SearchBar({ initQuery, onQueryChanged }) {

  const [query, setQuery] = useState(initQuery);

  useEffect(function () {
    onQueryChanged(query);
  }, [query, onQueryChanged]);

  const txtQuery_Changed = function (e) {
    setQuery(e.target.value);
    // onQueryChanged(e.target.value);
    // onQueryChanged(query);
  }

  const btnClear_Clicked = function () {
    setQuery(initQuery);
    // onQueryChanged(initQuery);
  }

  const txtQuery_KeyUp = function (e) {
    if (e.keyCode === 27) {
      btnClear_Clicked();
    }
  }

  return (
    <div>
      <label style={{ fontWeight: 'bold' }}>
        Filter tasks (by name)
        <div className="fg">
          <input type="text" value={query} onChange={txtQuery_Changed} onKeyUp={txtQuery_KeyUp} />
          <button type="button" onClick={btnClear_Clicked}>Clear</button>
        </div>
      </label>
    </div>
  )
}
