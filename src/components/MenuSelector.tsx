import React from 'react'

const MenuSelector = () => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn m-1">Pomodoro Timer</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white text-black rounded w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
  )
}

export default MenuSelector