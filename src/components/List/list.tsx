import React, { useEffect, useState } from 'react'
import './list.css'

export interface IList {
  arr: number[]
}

const List = ({ arr }: IList) => {
  return (
    <>
      <h1>Random array</h1>
      <div className="list">
        <p>
          [
          {arr.map((num, i) => (
            <span key={i}>{num}, </span>
          ))}
          ]
        </p>
      </div>
    </>
  )
}

export default List
