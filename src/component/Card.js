import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
          <h5>{props.day}</h5>
          <p>{props.children}</p>
          <div className="temp">
            <span>{props.low}&#176;</span>
            <span>{props.high}&#176;</span>
            
          </div>
    </div>
  )
}

export default Card