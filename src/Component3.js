import React from 'react'
import { Link } from 'react-router-dom'

export default function Component3() {
  return (
    <div style={{backgroundColor: "orange"}}>
        This is component 3! 
        <Link to="/">Home</Link>
    </div>
  )
}
