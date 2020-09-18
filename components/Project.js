import React from 'react'

export default function (props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div className="sources">
        <a target="_blank" href={props.app}>
          Live App
        </a>
        <a target="_blank" href={props.code}>
          Github
        </a>
      </div>
      <div className="text">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}
